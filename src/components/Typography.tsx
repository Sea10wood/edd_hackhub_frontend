import { Typography } from "@mui/material";

const TopTypo = () => {

    return (
        <>
            <Typography sx={{ position: "absolute", marginTop: "10%", marginRight: "70%",fontWeight: "bold", fontSize: "40px" }}>ハッカソン好きの</Typography>
            <Typography sx={{ position: "absolute", marginTop: "15%", marginRight: "50%",fontWeight: "bold", fontSize: "40px" }}>ハッカソン好きによる</Typography>
            <Typography sx={{ position: "absolute", marginTop: "20%", marginRight: "50%",fontWeight: "bold", fontSize: "40px" }}>ハッカソン好きのための</Typography>

            <Typography sx={{ position: "absolute", fontWeight: "bold", marginTop: "10%", marginLeft: "50%", fontSize: "120px" }}>Hotch Potch</Typography>
        </>
    )
}
export default TopTypo;