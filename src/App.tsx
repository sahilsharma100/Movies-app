import * as React from "react"
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import Sidebar from "./components/Sidebar/Sidebar.lazy"
import Content from "./components/Content/Content.lazy";
export const App = () => (
  <ChakraProvider theme={theme}>
    <Sidebar>
      <Content/>
    </Sidebar>
  </ChakraProvider>
)
