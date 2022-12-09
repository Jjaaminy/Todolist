import './App.css';
import React, {useState} from 'react';
import Container from "react-bootstrap/Container";
import {InputGroup} from "react-bootstrap";
import {CheckCircle, Trash} from "react-bootstrap-icons";
import {MdOutlineCheckBoxOutlineBlank} from "react-icons/all";

function List() {
    const [produkte, setProdukte] =useState(["item1","item2"]);
    const [addproduct, setAddproduct] = useState("");

    return (
        <div>
            <Container>
                <header>
                    <h1>Todo-Liste</h1>
                    <p id={"top"}/>
                    <p id={"eingabe"}>
                        <input type={"text"} value={addproduct} id={"mycheck"} onChange={e => setAddproduct(e.target.value)}
                               autoFocus placeholder={" Enter your Product"}/>

                        <button onClick={() =>
                            setAddproduct([])}>
                            löschen
                        </button>
                        <button id={"add"}
                                onClick={() => {
                                    setProdukte([...produkte, addproduct])
                                    setAddproduct('')
                                }}>hinzufügen
                        </button>
                    </p>
                    <p id={"bottom"}/>
                </header>
                <div id={"todos"}>
                {produkte.map((item,idx) =>
                    <InputGroup key={idx}  id={"theme"}>
                        <br/>
                        <label>{item}</label>
                        <input type="checkbox" id={"check"} name={"pl"} size={100} value={idx} autocomplete  />
                        <Trash id={"delete"}  size={25}onClick={() => {
                            let list = [...produkte]
                            list.splice(idx, 1)
                            setProdukte(list)
                        }}/>
                        <br/>
                        <br id={"break"}/>
                    </InputGroup>
                )
                }
                </div>
                <br/>
                <footer>
                    <button id={"listd"} onClick={() =>
                        setProdukte([])}>
                        liste löschen
                    </button>
                    <br/>
                </footer>
            </Container>
        </div>
    )
}
export default List;
