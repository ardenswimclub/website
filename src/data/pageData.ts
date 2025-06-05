import type { MarkdownHeading } from 'astro';
import type { AstroComponentFactory } from 'astro/runtime/server/index.js';
import { getCollection, render } from 'astro:content';
import path from 'path';

const pageTitle = 'Arden Swim Club';

const pagesCollection  = await getCollection('pages');

export type ContentInfo = { 
  Content: AstroComponentFactory;
  headings: MarkdownHeading[];
  id?: string;
  title: string;
  order: number ;
  heading?: string;
  filePath?: string | undefined;
}

export const pages : ContentInfo[] = await Promise.all(
  pagesCollection.map(async (page, index) => {
      const { Content, headings } = await render(page);
      const data = page.data;
      const parentDir = path.basename(path.dirname(page.filePath ?? ''));
  
      return {
        Content,        
        headings,
        filePath: page.filePath,
        id: `${parentDir}/${page.id}`,
        title: data.title ?? '',
        order: data.order ?? 0
      };
    })
  );


function findCommonBaseString(strings) {
  if (!strings.length) return '';

  let prefix = strings[0];
  for (let i = 1; i < strings.length; i++) {
    let j = 0;
    while (j < prefix.length && j < strings[i].length && prefix[j] === strings[i][j]) {
      j++;
    }
    prefix = prefix.slice(0, j);
    if (prefix === '') break; // Early exit if no common base
  }

  return prefix;
}

function cropPrefix(prefix : string, strings : string[]) {
  var start = prefix.length;
  return strings.map(s => s.substring(start) );
}


var paths : string[] = pages.map(o=>o.filePath ?? '').filter(o=>o?.length);
var prefix = findCommonBaseString(paths);  
paths = cropPrefix(prefix, paths);
var x = paths.join('\n');
// console.log(x);
// console.log(prefix);

function createFileSystem(paths : string[]) {

  const fs: { root: string[] } = { 'root': []   };
  paths.forEach(p => {
    const segments = p.split('/');
    if(segments.length == 1) {
      fs.root.push(segments[0]);
    }
  });

}

const menuitems = [
  {
    title: "Swim Team",
    path: "#",
    children: [
      { title: "General Info", path: "/swim-team/general-info" },
      { title: "Registration", path: "/swim-team/registration" },
      { title: "Dropdown Submenu", path: "#" },
      { title: "404 Page", path: "/404" },
    ]
  }
];

export const links = pages.sort((a,b) => a.order - b.order  ).map(p => { 
  return {
    href: `/${p.id}`, title: p.title
  };
});

