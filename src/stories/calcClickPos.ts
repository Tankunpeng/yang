export function calcClickPos(e: any, item: any) {
    const offsetParent = e.target.offsetParent
    const offsetInner = [e.clientX - 40 - offsetParent.offsetLeft, e.clientY - 20 - offsetParent.offsetTop]
        .map(item => item / 5 > 4 ? 1 : 0).map(item => item * 4)
    return [offsetInner[0] + item.location[0], offsetInner[1] + item.location[1]]
}