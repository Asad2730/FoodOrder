import CustomInput from "./CustomInput";
import { View } from 'react-native';


export const FormItems = ({ form, setForm }) => {

    const renderFormField = (key, item) => {
        switch (item.type) {
            case 'any other do ': return (
                <></>
            );

            default:
                return (
                    <CustomInput
                        OnChange={setForm}
                        Value={item.value}
                        Field={key}
                        Type={item.type}
                        Secure={item.secure}
                        PlaceHolder={item.placeHolder}
                    />
                );
        }
    };




    return (
        <>
            {Object.entries(form).map(([key, item], index) => (
                
                <View key={key}>                        
                    {renderFormField(key, item)}
                </View>


            ))}
        </>
    );
};
