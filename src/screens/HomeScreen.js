import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {
  useGetEmployeesQuery,
  useEditEmployeeMutation,
  useAddEmployeeMutation,
} from '../app/apiSlice';
import {FAB} from 'react-native-paper';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function HomeScreen({navigation}) {
  const {
    data: employees,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetEmployeesQuery();
  const [editEmployee] = useEditEmployeeMutation();
  const [addEmployee] = useAddEmployeeMutation();

  const handleNewEmployee = () => {
    navigation.navigate('Add');
  };

  const handleEditEmployee = employeeId => {
    navigation.navigate('Edit');
  };

  const renderItem = ({item}) => (
    <View
      style={{
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <Text style={{fontWeight: 'bold', fontSize: 16}}>ID: {item.id}</Text>
      <Text style={{fontWeight: 'bold', fontSize: 16}}>
        {item.employee_name}
      </Text>

      <TouchableOpacity onPress={() => handleEditEmployee(item.id)}>
        <MaterialIcons
          name="edit"
          size={20}
          color="#666"
          style={{marginRight: 5}}
        />
      </TouchableOpacity>
    </View>
  );

  let content;
  if (isLoading) {
    content = <Text>Loading...</Text>;
  } else if (isSuccess) {
    const employeesData = employees.data;

    content = (
      <FlatList
        style={{paddingHorizontal: 15, marginVertical: 10}}
        data={employeesData}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        ListHeaderComponent={
          <Text
            style={{
              marginBottom: 20,
              fontSize: 18,
              fontWeight: 'bold',
              color: 'black',
            }}>
            Hello Mr X
          </Text>
        }
      />
    );
  } else if (isError) {
    content = <Text>{error}</Text>;
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      {content}

      <FAB
        style={{
          position: 'absolute',
          margin: 16,
          right: 0,
          bottom: 0,
          backgroundColor: 'grey',
        }}
        icon="plus"
        onPress={handleNewEmployee}
      />
    </SafeAreaView>
  );
}
