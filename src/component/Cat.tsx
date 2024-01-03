import { useState } from "react"
import { Button, Text, View } from "react-native"



type CatProps = {
    name: string
}

const Cat = (props: CatProps)=>{

    const [isHungry, setIsHungry] = useState<boolean>(true);




    return(
        <View>
            <Text>I am {props.name}, and I am {isHungry ? 'hungry': 'full'}</Text>
            <Button
                onPress={()=>setIsHungry(false)}
                title={isHungry ? 'Pour me some milk, please!': 'Thank you'}
                disabled={!isHungry}
            />
        </View>
    )
}

export default Cat;