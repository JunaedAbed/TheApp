import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useAddEmployeeMutation} from '../app/apiSlice';

export default function AddNewScreen({navigation}) {
  const [employeeName, setEmployeeName] = useState('');
  const [employeeSalary, setEmployeeSalary] = useState('');
  const [employeeAge, setEmployeeAge] = useState('');
  const [addEmployee, {isLoading, isSuccess, isError, error}] =
    useAddEmployeeMutation();
  // const [addEmployee, {isLoading}] = useAddEmployeeMutation();

  const handleAddEmployee = async () => {
    if (!employeeName || !employeeSalary || !employeeAge) {
      console.log('Please fill in all fields');
      return;
    }

    addEmployee({
      name: employeeName,
      salary: employeeSalary,
      age: employeeAge,
    });

    if (response.data) {
      console.log('Employee added successfully:', response.data);

      Alert.alert(
        'Success',
        `Employee added successfully!`,
        [{text: 'OK', onPress: () => console.log('OK Pressed')}],
        {cancelable: false},
      );

      setEmployeeName('');
      setEmployeeSalary('');
      setEmployeeAge('');
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff', padding: 20}}>
      <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 20}}>
        Add New Employee
      </Text>

      <TextInput
        placeholder="Employee Name"
        style={{borderBottomWidth: 1, marginBottom: 20}}
        value={employeeName}
        onChangeText={text => setEmployeeName(text)}
      />

      <TextInput
        placeholder="Employee Salary"
        style={{borderBottomWidth: 1, marginBottom: 20}}
        value={employeeSalary}
        onChangeText={text => setEmployeeSalary(text)}
      />

      <TextInput
        placeholder="Employee Age"
        style={{borderBottomWidth: 1, marginBottom: 20}}
        value={employeeAge}
        onChangeText={text => setEmployeeAge(text)}
      />

      {isError && <Text style={{color: 'red', marginBottom: 20}}>{error}</Text>}

      {isSuccess && (
        <View style={{marginBottom: 20}}>
          <Text style={{color: 'green'}}>Employee added successfully!</Text>
        </View>
      )}

      <TouchableOpacity
        style={{
          backgroundColor: 'grey',
          padding: 10,
          borderRadius: 5,
          alignItems: 'center',
        }}
        onPress={handleAddEmployee}
        disabled={isLoading}>
        <Text style={{color: '#fff'}}>
          {isLoading ? 'Adding Employee...' : 'Add Employee'}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
