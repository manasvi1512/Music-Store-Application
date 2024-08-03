import { useRef } from "react";

export const Search = ({fn}) =>{
    const artist = useRef();
    return(
        <>
    <label>Find your Artist</label>
    <input ref={artist} type = 'text' className="form-control" placeholder= "Whats Playing?"/>
    <button className="btn btn-success" onClick={() =>{
        fn(artist.current.value);
    }}
    >Search</button>
    </>
    );
}
