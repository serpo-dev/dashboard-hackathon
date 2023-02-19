import { LeftSidebar } from "../components/LeftSidebar";
import { Header } from "../components/Header";
import { Heatmap } from "./Heatmap";

export const Main = () => {

  

    return (
        <div className="flex flex-row">
            <div className="flex flex-row">
                <LeftSidebar />
            </div>
            <div className="flex flex-col grow">
                <Header />
                <Heatmap />
            </div>
        </div>
    )
}