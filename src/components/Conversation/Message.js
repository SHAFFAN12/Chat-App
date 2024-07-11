import { Box, Stack } from '@mui/material'
import React from 'react'
import {Timeline} from "./";
import { Chat_History } from '../../data';

const Message = () => {
    return (
        <Box p={3}>
            <Stack spacing={3}>
                {Chat_History.map((el) => {
                    switch (el.type) {
                        case "divider":
                            return <Timeline />      
                        case "msg":
                            switch (el.subtype) {
                                case "img":

                                    break;
                                case "doc":

                                    break;
                                case "link":

                                    break;
                                case "reply":

                                    break;

                                default:
                                    break;
                            }
                            break;

                        default:
                            return <></>
                    }
                })}
            </Stack>

        </Box>
    )
}

export default Message
