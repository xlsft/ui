export default function measureText(value: string): number {
    let div = document.createElement('div');
    div.innerText = value;
    div.style.fontSize ='16px';
    div.style.width = 'auto';
    div.style.display = 'inline-block';
    div.style.visibility = 'hidden';
    div.style.position = 'fixed';
    div.style.overflow = 'auto';
    document.body.append(div)
    let width = div.clientWidth;
    div.remove();
    return width
};