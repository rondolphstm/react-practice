import React, {useState} from 'react';
import { Button, Text, StyleSheet} from 'react-native'

export default function Counter(){
    const [count, setCount] = useState(0);
    return (
        <>
        <Text style={StyleSheet.medText}>Counter: {count}</Text>
        <Button 
        tittle={"Count + 1"}
        onPress{() => setCount}


        
        
        </>
    )
} 