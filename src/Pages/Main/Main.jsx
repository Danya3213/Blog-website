import { NewPosts } from "./NewPosts/NewPosts";
import { Weather } from "../../Components/Weather/Weather";

export const Main = () => {

    return (
        <>
            <h3>Main page</h3>
            <NewPosts />
            <Weather />
        </>
    );
};