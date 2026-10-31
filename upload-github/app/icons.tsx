import type {CSSProperties} from 'react';
const colors=['#a7c2ff','#a9dfc7','#efc48e','#d0b8f2','#f0b7a9'];
export function FunIcon({kind}:{kind:number}){return <svg className="fun-icon" style={{'--icon-color':colors[kind]} as CSSProperties} width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
{kind===0&&<><path className="icon-fill" d="M5 14 16 5l11 9v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2Z"/><path d="m3 15 13-11 13 11M12 28v-9h8v9"/><path d="M12 12c1 2 7 2 8 0"/></>}
{kind===1&&<><path className="icon-fill" d="M5 8h20a2 2 0 0 1 2 2v16H7a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3l15-2v4"/><path d="M27 15h-8a3 3 0 0 0 0 6h8Z"/><circle cx="20" cy="18" r=".9" fill="currentColor" stroke="none"/><path d="M9 13h4m-4 4h2"/></>}
{kind===2&&<><path className="icon-fill" d="M8 3h16v26l-4-2-4 2-4-2-4 2Z"/><path d="M12 9h8m-8 5h5m-5 8h8"/><path d="m20 13 1 2 2 .3-1.5 1.4.4 2-1.9-1-1.8 1 .3-2-1.5-1.4 2-.3Z"/></>}
{kind===3&&<><path className="icon-fill" d="M5 15c0-5 4-8 10-8h4l5-4v7l3 4h3v7h-4l-3 4v4h-5v-3h-6v3H7v-6c-3-2-4-4-2-8Z"/><path d="M11 11h6m-12 4c-4 0-5-4-2-5"/><circle cx="23" cy="15" r="1" fill="currentColor" stroke="none"/><path d="m13 3 2-2 2 2"/></>}
{kind===4&&<><path d="M7 5v22M16 5v22M25 5v22"/><rect className="icon-fill" x="3" y="9" width="8" height="7" rx="3"/><rect className="icon-fill" x="12" y="18" width="8" height="7" rx="3"/><rect className="icon-fill" x="21" y="7" width="8" height="7" rx="3"/></>}
</svg>}
