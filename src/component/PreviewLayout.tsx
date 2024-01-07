import React, { useEffect, useRef } from 'react';
import { View, PanResponder, Animated, GestureResponderEvent, PanResponderGestureState } from 'react-native';

const DraggableBox = () => {
    // Sử dụng Animated.ValueXY để theo dõi vị trí của box
    const pan = useRef(new Animated.ValueXY()).current;


    // Tạo một PanResponder để xử lý cử chỉ kéo
    const panResponder = useRef(
        PanResponder.create({
            // Khi thao tác chạm bắt đầu, component này sẽ trở thành responder
            onStartShouldSetPanResponder: () => true,

            // Xử lý di chuyển: Cập nhật vị trí của box
            // onPanResponderMove: (e: GestureResponderEvent, gestureState: PanResponderGestureState) => {
            //     console.log(gestureState.dx, gestureState.dy)
            //     // pan.x.setValue(gestureState.dx)
            //     // pan.y.setValue(gestureState.dy)
            //     Animated.event(
            //         [null, { dx: pan.x, dy: pan.y }],
            //         { useNativeDriver: false }
            //     )
            // },

            onPanResponderMove: Animated.event(
                [null, { dx: pan.y, dy: pan.x }],
                { useNativeDriver: false }
              ),

            // Khi ngón tay người dùng rời khỏi màn hình, reset vị trí của box
            onPanResponderRelease: () => {
                Animated.spring(pan, {
                    toValue: { x: 0, y: 0 },
                    friction: 4,
                    useNativeDriver: false
                }).start();
            }
        })
    ).current;

    useEffect(() => {
        const panListener = pan.addListener(value => {
            console.log(value);

        })

        return () => {
            pan.removeListener(panListener);
        }
    }, [])

    return (
        <View style={{flex: 1}}>
        <Animated.View
            style={{
                transform: [{ translateX: pan.x }, { translateY: pan.y }],
                height: 100,
                width: 100,
                borderRadius: 50,
                backgroundColor: 'blue'
            }}
            {...panResponder.panHandlers}
        />
                <Animated.View
            style={{
                transform: [{ translateX: pan.y }, { translateY: pan.x }],
                height: 100,
                width: 100,
                borderRadius: 50,
                backgroundColor: 'blue',
                position: 'relative',
                top: -100,
            }}
            {...panResponder.panHandlers}
        />

        </View>

    );
};

export default DraggableBox;
