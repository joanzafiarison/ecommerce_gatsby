import React, {useState} from "react";
import Layout from "../components/Layout.js";

const frequent_questions = [
    {
        "question":"En combien de temps je serai livré?",
        "response":"Les délais de livraisons sont de 2 à 3 semaine, il peut arriver que nous gardons des stocks pour pouvoir livrer rapidement"
    },
    {
        "question":"D'ou proviennent les vêtements 'Killer Moves'",
        "response":"Les délais de livraisons sont de 2 à 3 semaine, il peut arriver que nous gardons des stocks pour pouvoir livrer rapidement"
    },
    {
        "question":"Quelles sont les tailles présentes dans le magasin ?",
        "response":"Nous taillons sur les tailles suivante :"
    },
    {
        "question":"Conseil de lavage",
        "response":"Pour les rashguard, nous vous conseillons un lavage à 30°, cela suffira pour garder vos vêtements sur le long terme"
    },
    {
        "question":"Politique deRetour",
        "response":"Si le vêtement est endommagé vous pouvez retourner le produit et nous vous renverrons un neuf"
    }
]

const FAQ = () => {
    const [currentQuestion, setCurrentQuestion] = useState(-1)

    function HandleQuestions(i){
        if(i === currentQuestion){
            setCurrentQuestion(-1)
        }
        else{
            setCurrentQuestion(i)
        }
    }
    return(
        <Layout>
            <div style={{display:"flex", flexDirection:"column", alignItems:"center", margin:"2em"}}>
                <h1>FAQ</h1>
                
                <div className="questions">
                    {frequent_questions.map((element, i)=>(
                        <div className="question_panel" key={i}>
                            <div className="question">
                                <p>{element.question}</p>
                                <button onClick={()=>HandleQuestions(i)}>V</button>
                            </div>
                            <div className="info" style={{display: currentQuestion === i? "flex" : "none"}}>
                                <p>{element.response}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    )
}

export default FAQ;