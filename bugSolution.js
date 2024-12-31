To fix this, optimize state updates and prevent unnecessary re-renders.  Use `useMemo` to memoize the style calculation, ensuring that it only updates when the relevant data changes:

```javascript
import React, { useState, useEffect, useMemo } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';

const DATA = [{id:1, val:0}, {id:2, val:0}, {id:3, val:0}];

const MyComponent = () => {
  const [data, setData] = useState(DATA);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setData(prevData => prevData.map(item => ({...item, val: Math.random()})));
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const renderItem = ({ item }) => {
    const itemStyle = useMemo(() => ({
      backgroundColor: item.val > 0.5 ? 'green' : 'red',
      height: 100
    }), [item.val]);

    return <View style={itemStyle} />
  };

  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      renderItem={renderItem}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
    />
  );
};

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: '#ccc'
  }
});

export default MyComponent;
```
By memoizing the style calculation and using `ItemSeparatorComponent`, the `FlatList` renders more smoothly and avoids visual glitches.  The key is to reduce unnecessary re-renders within the `renderItem` function.