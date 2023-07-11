import { Button, Stack, flatten } from "@chakra-ui/react";
import "./home.css";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";
const Home = () => {
  return (
    <section id="home">
      <Flex
        w={"80%"}
        m={"auto"}
        mt={"10vh"}
        gap={"20px"}
        // border="1px solid red"
      >
        <Box
        // border={"1px solid blue"}
        >
          <Text fontSize={"35px"} align={"center"} fontWeight={400}>
            <span>
              Hello I'm <br />
            </span>
            Piyush Kumar Singh <br />
            <span>Full Stack Web Developer</span>
          </Text>
          <Text
            fontSize={"20px"}
            align={"center"}
            mt={"20px"}
            justifySelf={"center"}
            lineHeight={1.5}
          >
            Experienced working with teams to produce impactful, leading-edge
            websites that engage customers and deliver business results.
            Well-versed in design standards and user preferences. Resourceful
            professional with successful track record in developing innovative
            web designs and features. Possesses solid knowledge of HTML, CSS,
            JavaScript and Bootstrap with ability to quickly learn new
            technologies. Demonstrated success in identifying and resolving
            complex code issues.
          </Text>
          <Stack
            align={"center"}
            display={"flex"}
            flexDirection={"row"}
            gap={10}
            mt={"20px"}
            // border={"1px solid red"}
          >
            <div className="icon-div">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                focusable="false"
                width={"1.5em"}
                height={"1.5em"}
                class="icon-coding"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M450 128a46 46 0 00-44.11 59l-71.37 71.36a45.88 45.88 0 00-29 0l-52.91-52.91a46 46 0 10-89.12 0L75 293.88A46.08 46.08 0 10106.11 325l87.37-87.36a45.85 45.85 0 0029 0l52.92 52.92a46 46 0 1089.12 0L437 218.12A46 46 0 10450 128z"></path>
              </svg>
            </div>

            <Text fontSize={"20px"} lineHeight={1.5} color={"wheat"}>
              Coding Practice of 1000+ Hours
            </Text>
          </Stack>
          <Divider border={"1px solid white"} m={"16px 0px"} w={"500px"} />
          <Stack
            align={"center"}
            display={"flex"}
            flexDirection={"row"}
            gap={10}
            // border={"1px solid red"}
          >
            <div className="icon-div">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                focusable="false"
                width={"1.5em"}
                height={"1.5em"}
                class="icon-coding"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M450 128a46 46 0 00-44.11 59l-71.37 71.36a45.88 45.88 0 00-29 0l-52.91-52.91a46 46 0 10-89.12 0L75 293.88A46.08 46.08 0 10106.11 325l87.37-87.36a45.85 45.85 0 0029 0l52.92 52.92a46 46 0 1089.12 0L437 218.12A46 46 0 10450 128z"></path>
              </svg>
            </div>

            <Text fontSize={"20px"} lineHeight={1.5} color={"wheat"}>
              DSA Practice of 700+ Hours
            </Text>
          </Stack>
          <Divider border={"1px solid white"} m={"16px 0px"} w={"500px"} />
          <Stack
            align={"center"}
            display={"flex"}
            flexDirection={"row"}
            gap={10}
            // border={"1px solid red"}
          >
            <div className="icon-div">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                focusable="false"
                width={"1.5em"}
                height={"1.5em"}
                class="icon-coding"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M450 128a46 46 0 00-44.11 59l-71.37 71.36a45.88 45.88 0 00-29 0l-52.91-52.91a46 46 0 10-89.12 0L75 293.88A46.08 46.08 0 10106.11 325l87.37-87.36a45.85 45.85 0 0029 0l52.92 52.92a46 46 0 1089.12 0L437 218.12A46 46 0 10450 128z"></path>
              </svg>
            </div>

            <Text fontSize={"20px"} lineHeight={1.5} color={"wheat"}>
              5+ Projects Completed
            </Text>
          </Stack>
          <Box
            display={"flex"}
            // border={"1px solid red"}
            mt={"50px"}
            justifyContent={"center"}
            gap={"20px"}
          >
            <Button>Resume</Button>
            <Button>Let's Talk</Button>
          </Box>
        </Box>

        <Box
        // border={"1px solid green"}
        >
          <div className="me"></div>
        </Box>
      </Flex>
    </section>
  );
};
export default Home;
