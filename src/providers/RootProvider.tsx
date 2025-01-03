import { ChakraProvider, Flex, extendTheme, withDefaultColorScheme } from "@chakra-ui/react";
import dayjs from "dayjs";
import dayOfYear from "dayjs/plugin/dayOfYear";
import isBetween from "dayjs/plugin/isBetween";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import localizedFormat from "dayjs/plugin/localizedFormat";
import relativeTime from "dayjs/plugin/relativeTime";
import utc from "dayjs/plugin/utc";
import { Toaster } from "react-hot-toast";
import AuthContext from "./AuthContext";
import FullScreenLoaderContext from "./FullScreenLoaderContext";
import PlatformProvider from "./PlatformContext";

// import NavMenu from "components/NavMenu";

dayjs.extend(localizedFormat);
dayjs.extend(dayOfYear);
dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);
dayjs.extend(isBetween);
dayjs.extend(utc);
dayjs.extend(relativeTime);

const primaryColors = {
  "50": "#D4F9E8",
  "100": "#C4F6E4",
  "200": "#8EEDD3",
  "300": "#50C9B2",
  "400": "#259489",
  "500": "#004D4C",
  "600": "#003D42",
  "700": "#002E37",
  "800": "#00212C",
  "900": "#001824",
};

const backgroundColors = {
  "50": "#5D5F5F",
  "100": "#4F5151",
  "200": "#424343",
  "300": "#343536",
  "400": "#262628",
  "500": "#18181A",
  "600": "#161313",
  "700": "#120D0E",
  "800": "#0F080A",
  "900": "#0C0407",
};

//theme config can be found here
//https://github.com/chakra-ui/chakra-ui/tree/main/packages/components/theme/src/components
const theme = extendTheme(
  {
    components: {
      Switch: {
        baseStyle: {
          track: {
            bg: "bg.300",
            _checked: {
              bg: "primary.500",
            },
          },
        },
      },
      Modal: {
        baseStyle: {
          dialog: {
            mx: "0.5rem",
            backgroundColor: "bg.500",
            color: "white",
          },
          overlay: {
            background: "blackAlpha.300",
            backdropFilter: "blur(10px) hue-rotate(15deg)",
          },
          closeButton: {
            color: "white",
          },
        },
      },
    },
    fonts: {
      heading: "Inter",
      body: "Inter",
    },
    colors: {
      primary: primaryColors,
      bg: backgroundColors,
    },
    useSystemColorMode: false,
  },
  withDefaultColorScheme({ colorScheme: "primary" })
);

interface IProps {
  children: React.ReactNode | React.ReactNode[];
  pageProps: any;
}

const RootProvider: React.FC<IProps> = ({ children }) => {
  return (
    <ChakraProvider theme={theme}>
      <FullScreenLoaderContext>
        <AuthContext>
          <PlatformProvider>
            <Flex bgColor={"#F7FAFC"} minH={"100vh"}>
              {/* <NavMenu /> */}
              {children}
              {/* <Footer /> */}
            </Flex>
          </PlatformProvider>
        </AuthContext>
      </FullScreenLoaderContext>
      <Toaster />
    </ChakraProvider>
  );
};

export default RootProvider;
