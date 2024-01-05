import React, { PropsWithChildren } from 'react';
import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';


type PreviewLayoutProps = PropsWithChildren<{
    label: string;
    values: string[];
    selectedValue: string;
    setSelectedValue: (value: string) => void;
}>


const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    button:{
        paddingHorizontal: 8,
        paddingVertical: 6,
        backgroundColor: 'oldlace',
        minWidth: '48%',
        marginHorizontal: '1%',
        marginBottom: 6,
        borderRadius: 4
    },
    buttonSelected:{
        backgroundColor: 'coral'
    },
    buttonLabel:{

        fontSize: 12,
        fontWeight: '500',
        color: 'coral'
    },
    buttonLabelSelected: {
        color: 'white'
    },

    label:{
        textAlign: 'center',
        fontSize: 24,
        marginBottom: 10
    },
    container:{
        flex: 1,
        marginTop: 8
    }
})
const PreviewLayout = (props: PreviewLayoutProps) => {
    const { label, values, selectedValue, children, setSelectedValue } = props;
    return (
        <View style={{ padding: 10, flex: 1, backgroundColor: 'white' }}>
            <View><Text style={styles.label}>{label}</Text></View>
            <View style={[styles.row]}>
                {values.map(value => (
                    <TouchableOpacity style={[styles.button, selectedValue === value && styles.buttonSelected]} key={value} onPress={()=> setSelectedValue(value)}>
                        <Text style={[styles.buttonLabel, selectedValue === value && styles.buttonLabelSelected]}>{value}</Text>
                    </TouchableOpacity>
                ))}

            </View>
            <View style={[styles.container, {[label]: selectedValue}]}>
                    {children}
            </View>
        </View>
    );
}

export default PreviewLayout;