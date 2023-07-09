
interface AvatarBadgeProps{
    url_avatar: string
    nome: string
    username: string
}


export function AvatarBadge(props:AvatarBadgeProps) {

    return <>
        <div className="flex flex-1 justify-center items-center rounded-full bg-black h-[10vh] text-zinc-f">
            <div className="w-[7vh] h-[7vh] mx-2">
                <img className="rounded-full" src={props.url_avatar} />
            </div>


            <div className="flex flex-col gap-0 px-2">
                <span className="font-bold text-sm">{props.nome}</span>
                <a href='#' className="text-xs text-zinc-700">@<span>{props.username}</span></a>
            </div>
        </div>
    </>
}