
import { Sidebar } from "../../components/sidebar/sidebar";
import AvatarBadge from "../../components/avatar/avatar";

export interface DashboardContentProps {
    nome: string,
    username: string,
    url_avatar: string
}

export function DashboardContent(props: DashboardContentProps) {

    return (
        <>
            <div className="flex justify-start h-screen">
                <aside className="bg-purple-500 text-white p-8">
                    <Sidebar color={"white"} bgColor={"purple"} />
                </aside>


                <main className="flex flex-col p-8 h-screen w-full">
                    <div>
                        <AvatarBadge 
                            nome={props.nome} 
                            username={props.username} 
                            url_avatar={props.url_avatar} 
                        />
                    </div>

                    <div className="flex flex-col flex-1 my-4">
                        <h1 className="text-4xl font-bold m-4">Dashboard</h1>
                        <div className="h-2" />

                        <div className="flex flex-1 justify-center items-center bg-zinc-500 m-4 shadow-xl">
                        </div>
                    </div>
                </main>
            </div>
        </>
    )

}