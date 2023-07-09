export default function array_random(list: Array<any>): any {
    return list[Math.floor((Math.random()*list.length))];
}