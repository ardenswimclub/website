
export function withBase(path: string): string {

    const base = import.meta.env.BASE_URL || '/';

    if(!path)
        return base;

    // reject non-local paths        
    if(path.includes('://'))
        return path;

    // don't wrap local anchor links
    if(path.startsWith('#'))
        return path;

    const newPath = `${base.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;



    // if(path.includes('.pdf'))
    //     console.log({base,path,newPath});
    return newPath

}