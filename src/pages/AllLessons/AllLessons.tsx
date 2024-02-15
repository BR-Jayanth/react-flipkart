import { Box, Tab } from "@mui/material"
import { NamingConvention } from "../../components/NamingCoventions/NamingConvention"
import { ExternalCss } from "../../components/css/ExternalCss"
import { InPage } from "../../components/css/InPage"
import { Inlinecss } from "../../components/css/InlineCss"
import { MyFragment } from "../../components/fragment/MyFragments"
import { MyUseStateHook } from "../../components/hooks/MyUseStateHook"
import { TabContext, TabList, TabPanel } from "@mui/lab"
import { useState } from "react"
import { MyStarRating } from "../../mui/MyStarRating"
import { MyImage } from "../../components/myImage/MyImage"
import { MyCards } from "../../components/myImage/MyCards"
import { CardContainer } from "../../components/cards/CardContainer"
import { MyProps } from "../../components/props/MyProps"
import { Sharing } from "../../components/sharing/Sharing"
import { ApiCaller } from "../../components/apiCaller/ApiCaller"
import { TakeNotes } from "../../components/take-notesTopic/TakeNotes"


export const AllLessons: React.FC<{}> = () => {
    // return <div> im all Lessons
    //     <NamingConvention/>
    //     <MyFragment/>
    // </div>
    // return <> im all Lessons
    // <NamingConvention/>
    // <MyFragment/>
    // <Inlinecss/>
    // <ExternalCss/>
    // <InPage/>
    // <MyUseStateHook/>
    // </>  

    let [number, setNumber] = useState('1')
    return <>

        <h1>All Lessons</h1>
        <Box>
            <TabContext value={number}>
                <TabList onChange={(e, num) => { setNumber(num) }}>
                    <Tab label={"USE STATE"} value={'1'} />
                    <Tab label={"NamingConvention"} value={'2'} />
                    <Tab label={"Fragment"} value={"3"} />
                    <Tab label={"Inlinecss"} value={'4'} />
                    <Tab label={"ExternalCss"} value={"5"} />
                    <Tab label={"InPage"} value={"6"} />
                    <Tab label={"Ratting"} value={"7"} />
                    <Tab label={"MY Image"} value={"8"} />
                    <Tab label={"Props"} value={"9"} />
                    <Tab label={"React Share"} value={"10"} />
                    <Tab label={"Api Concept useEffect"} value={"11"} />
                    <Tab label={"Take Notes"} value={"12"} />
                </TabList>
                <TabPanel value="1">
                    <MyUseStateHook />
                </TabPanel>
                <TabPanel value="2">
                    <NamingConvention />
                </TabPanel>
                <TabPanel value="3">
                    <MyFragment />
                </TabPanel>
                <TabPanel value="4">
                    <Inlinecss />
                </TabPanel>
                <TabPanel value="5">
                    <ExternalCss />
                </TabPanel>
                <TabPanel value="6">
                    <InPage />
                </TabPanel>
                <TabPanel value="7">
                    <MyStarRating />
                </TabPanel>
                <TabPanel value="8">
                    <MyImage />
                    <CardContainer />
                </TabPanel>
                <TabPanel value="9">
                    <MyProps />

                </TabPanel>
                <TabPanel value="10">

                <Sharing />
                </TabPanel>
                <TabPanel value="11">

                <ApiCaller />
                
                </TabPanel>
                <TabPanel value="12">

                <TakeNotes/>
                </TabPanel>
            </TabContext>

        </Box>
    </>
}