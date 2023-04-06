import ShoesModelDesciption from "@/components/shoes-model/ShoesModelDescription";
import ShoesModelImageShow from "@/components/shoes-model/ShoesModelImageShow";
import ShoesModelInfo from "@/components/shoes-model/ShoesModelInfo";
import ShoesModelRate from "@/components/shoes-model/ShoesModelRate";
import { Box, Container } from "@mui/material";

export default function ShoesModelPage(){
    const images = [
        "/image/shoes-sample1.webp",
        "/image/shoes-sample2.webp",
        "/image/shoes-sample3.webp",
        "/image/shoes-sample4.webp",
        "/image/shoes-sample5.webp",
        "/image/shoes-sample6.webp",
        "/image/shoes-sample7.webp",
        "/image/shoes-sample8.webp",
    ]
    return (
        <Container>
            <Box>
                <Box display="flex">
                    <Box flex={2}>
                        <ShoesModelImageShow images={images} width="100%"/>
                    </Box>
                    <Box flex={3}>
                        <ShoesModelInfo/>
                    </Box>
                </Box>
                <Box>
                    <ShoesModelDesciption/>
                </Box>
                <Box>
                    <ShoesModelRate/>
                </Box>
            </Box>
        </Container>
    )
}