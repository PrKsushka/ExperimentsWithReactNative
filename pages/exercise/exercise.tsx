import {Button, StyleSheet, TouchableOpacity, View} from "react-native";
import React, {useEffect, useRef, useState} from "react";
import {BottomSheet, Text} from "@rneui/base";
import {Audio} from "expo-av";
import style from "./styles";

const Exercise: React.FunctionComponent = () => {
    const [open, setIsOpen] = useState(false);
    const [play, setPlayActive] = useState(false);
    const [time, setTime] = useState(30);
    const [playText, setPlayText] = useState('play');
    const interval = useRef<any>();

    const openOverlay = () => {
        setIsOpen(!open)
    }
    const closeOverlay = () => {
        setIsOpen(false)
    }

    const getMusic = async () => {
        const {sound} = await Audio.Sound.createAsync(require('../../assets/experiments2.m4a'));
        return sound;
    }
    const music = useRef<any>(getMusic())
    useEffect(() => {
        if (play) {
            setPlayText('pause');
            music.current.then((res: any) => {
                res.playAsync();
            })
            interval.current = setInterval(() => {
                setTime((prevState) => prevState - 1);
            }, 1000);
            if (time <= 0) {
                clearInterval(interval.current);
                music.current.then((res: any) => {
                    res.pauseAsync()
                });
                setPlayText('play');
                setPlayActive(false)
                setTime(20);
                music.current = getMusic();
            }
        } else {
            setPlayText('play');
            music.current.then((res: any) => {
                res.pauseAsync()
            })
        }
        return () => {
            clearInterval(interval.current);
        }
    }, [play, time]);

    const turnPlayOn = () => {
        setPlayActive(!play);
    }

    return (
        <View>
            <Button title='click me' onPress={openOverlay}/>
            <BottomSheet isVisible={open} onBackdropPress={closeOverlay} containerStyle={style.container}>
                <View style={style.innerView}>
                    <Text style={style.letters}>{`00:${(time - 10 < 0) ? '0' + time : time}`}</Text>
                    <TouchableOpacity style={style.button} onPress={turnPlayOn}>
                        <Text>{playText}</Text>
                    </TouchableOpacity>
                </View>

            </BottomSheet>
        </View>
    )
}
export default Exercise;
