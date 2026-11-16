"""Assemble les pages Next.js de 7-osteo à partir du JSX traduit (_fr/) — à lancer depuis 7-osteo/."""
import os, re

SRC, APP, COMP = '_fr', 'src/app', 'src/components'

ROUTES = {'home': '', 'about': 'a-propos', 'pricing': 'tarifs', 'service': 'soins', 'blog': 'blog',
          'review': 'avis', 'contact': 'contact'}
SOINS = {'steam-cleaning': 'dos-et-lombaires', 'upholstery-cleaning': 'nuque-et-epaules', 'area-rug-cleaning': 'grossesse',
         'carpet-protection-treatment': 'nourrissons-et-enfants', 'emergency-spot-cleaning': 'suivi-du-sportif',
         'mattress-cleaning': 'stress-et-tensions'}
BLOG = {'understanding-carpet-fiber-types-and-their-care': 'frequence-consultation-osteopathe',
        'top-eco-friendly-carpet-cleaning-methods': 'mal-de-dos-au-bureau',
        'diy-carpet-repair-fixing-burns-and-tears': 'osteopathie-et-grossesse',
        'choosing-the-right-carpet-cleaner-for-your-home': 'premiere-consultation-bebe',
        'how-carpet-cleaning-improves-indoor-air-quality': 'reprendre-la-course-a-pied',
        'best-ways-to-remove-pet-stains-from-carpets': 'stress-et-tensions',
        'best-ways-to-remove-pet-stains-from-carpets-2': 'stress-et-tensions'}
LINKS = {'/about': '/a-propos', '/pricing': '/tarifs', '/service': '/soins', '/review': '/avis',
         '/licenses': '/contact', '/changelog': '/blog', '/styleguide': '/contact',
         'tel:248-887-9982': 'tel:+33240001234', 'tel:(212)555-0101': 'tel:+33240001234',
         'mailto:service@Presma.com': 'mailto:contact@osteo-equilibre.fr',
         'https://www.instragram.com/': 'https://www.instagram.com/', 'https://webflow.com/': 'https://omela.fr',
         'https://templateflow.net/': 'https://omela.fr',
         'https://www.google.com/maps/@22.4394631,89.0437632,15z?entry=ttu&g_ep=EgoyMDI2MDcxMi4wIKXMDSoASAFQAw%3D%3D':
             'https://www.google.com/maps/search/?api=1&query=12+rue+Cr%C3%A9billon+44000+Nantes'}


def block(src, start_pat):
    i = src.index(start_pat)
    tag = re.match(r'<([a-z0-9]+)', src[i:]).group(1)
    depth = 0
    for m in re.finditer(r'<(/?)' + tag + r'\b[^>]*?(/?)>', src[i:]):
        if m.group(2):
            continue
        depth += -1 if m.group(1) else 1
        if depth == 0:
            return i, i + m.end()
    raise ValueError(start_pat)


def links_to_next(s):
    res, pos, stack = [], 0, []
    for m in re.finditer(r'<a\b([^>]*)>|</a>', s):
        res.append(s[pos:m.start()])
        if m.group(0) == '</a>':
            res.append('</Link>' if stack and stack.pop() else '</a>')
        else:
            internal = re.search(r'href="/[^"]*"', m.group(1)) is not None
            stack.append(internal)
            res.append(('<Link' if internal else '<a') + m.group(1) + '>')
        pos = m.end()
    res.append(s[pos:])
    return ''.join(res)


def prep(s):
    s = s.replace('https://presma.webflow.io/', '/')
    for a, b in BLOG.items():
        s = s.replace(f'href="/blog/{a}"', f'href="/blog/{b}"')
    for a, b in SOINS.items():
        s = s.replace(f'href="/services/{a}"', f'href="/soins/{b}"')
    for a, b in LINKS.items():
        s = s.replace(f'href="{a}"', f'href="{b}"')
    s = s.replace('href="/404"', 'href="/"')
    # Tous les boutons « Prendre rendez-vous » -> BOOKING_HREF (PROCESS §4)
    s = re.sub(r'<a href="/contact"( className="(?:menu-button-02|hero-button|dark-button|header-button|cta-button|price-button|normal-button)[^"]*")',
               r'<a href={BOOKING_HREF}\1', s)
    s = re.sub(r'<a href="/soins"( className="hero-button[^"]*")', r'<a href={BOOKING_HREF}\1', s)
    s = s.replace(' aria-current="page"', '').replace(' w--current"', '"')
    s = s.replace('style={{"maxWidth": "849pxpx"}}', 'style={{"maxWidth": "849px"}}').replace('style={{"maxWidth": "1698pxpx"}}', 'style={{"maxWidth": "1698px"}}')
    s = re.sub(r' width="Auto" height="Auto"', '', s)
    return links_to_next(s)


def body_of(name):
    src = open(os.path.join(SRC, name + '.tsx'), encoding='utf8').read()
    return src[src.index('<>') + 2: src.rindex('</>')]


def strip_chrome(s):
    try:
        a, b = block(s, '<div className="remove-this-button-2">')
        s = s[:a] + s[b:]
    except ValueError:
        pass
    a, b = block(s, '<div data-animation="default" className="navbar w-nav"')
    s = s[:a] + '<Nav />' + s[b:]
    a, b = block(s, '<div className="footer-section">')
    s = s[:a] + '<Footer />' + s[b:]
    return s


IMPORTS = ("/* eslint-disable @next/next/no-img-element */\nimport Link from 'next/link'\n"
           "import { Nav } from '@/components/Nav'\nimport { Footer } from '@/components/Footer'\n"
           "import { BOOKING_HREF } from '@/content/site'\nimport { T } from '@/content/texts'\n")

os.makedirs(COMP, exist_ok=True)
home = body_of('home')
a, b = block(home, '<div data-animation="default" className="navbar w-nav"')
open('_source/nav-raw.tsx', 'w', encoding='utf8').write(prep(home[a:b]))
a, b = block(home, '<div className="footer-section">')
open(os.path.join(COMP, 'Footer.tsx'), 'w', encoding='utf8').write(
    "/* eslint-disable @next/next/no-img-element */\nimport Link from 'next/link'\nimport { BOOKING_HREF } from '@/content/site'\nimport { T } from '@/content/texts'\n\n"
    "export function Footer() {\n  return (\n" + prep(home[a:b]) + "\n  )\n}\n")

for name, route in ROUTES.items():
    s = prep(strip_chrome(body_of(name)))
    d = os.path.join(APP, route) if route else APP
    os.makedirs(d, exist_ok=True)
    fn = ''.join(w.capitalize() for w in re.split(r'[-_]', name)) + 'Page'
    open(os.path.join(d, 'page.tsx'), 'w', encoding='utf8').write(
        IMPORTS + f"\nexport default function {fn}() {{\n  return (\n<>\n{s}\n</>\n  )\n}}\n")

for name, out in (('services__steam-cleaning', '_source/soin-raw.tsx'),
                  ('blog__understanding-carpet-fiber-types-and-their-care', '_source/article-raw.tsx'),
                  ('404', '_source/404-raw.tsx')):
    open(out, 'w', encoding='utf8').write(prep(strip_chrome(body_of(name))))
print('ok')
