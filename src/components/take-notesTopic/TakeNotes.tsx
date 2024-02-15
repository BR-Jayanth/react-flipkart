import React, { useState } from "react";
import { allNotes, students } from "take-notes";
import { MyNotesCards } from "../cards/MyNotesCards";


export const TakeNotes: React.FC<{}> = () => {
    let [alldata, setAllData] = useState(allNotes.all())
    console.log(allNotes.all())

    return <>
        {
            alldata.map((item:any) => {
                return <>
                <MyNotesCards name={item.studentName} fileLink={item.fileUrl} language={item.language} topic={item.topic}/>
                </>
            })
        }
    </>
}