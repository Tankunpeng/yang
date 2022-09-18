import React from "react";

export function RawImg({url}: { url: string }) {
    return <div style={{width: 320, overflow: 'hidden', height: 500, position: "absolute", left: '320px'}}><img
        src={url} alt="" width={320}/></div>
}