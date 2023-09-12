import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Category from '../../Screens/Auth/Category';
import LoginOptions from '../../Screens/Auth/LoginOptions';
import RegisterOptions from '../../Screens/Auth/RegisterOptions';
import ForgotPassword from '../../Screens/Auth/ForgotPassword';
import OtpScreen from '../../Screens/Auth/OtpScreen';
import ResetPassword from '../../Screens/Auth/ResetPassword';
import FeedNavigator from './FeedNavigator';
import AppNavigator from './AppNavigator';

const Auth = createNativeStackNavigator();

const AuthNavigator = ()=>{
    return (
        <Auth.Navigator>
    
            <Auth.Screen
                name='AppNavigator'
                component={AppNavigator}
                options={{
                    headerShown: false
                }}
            />

            <Auth.Screen
                name="LoginCategory"
                component={Category}
                options={{
                headerShown: false
            }}
            />

            <Auth.Screen
                name="RegisterCategory"
                component={Category}
                options={{
                headerShown: false
            }}
            />

            <Auth.Screen
                name="LoginOptions"
                component={LoginOptions}
                options={{
                headerShown: false
            }}
            />

            <Auth.Screen
                name="RegisterOptions"
                component={RegisterOptions}
                options={{
                headerShown: false
            }}
            />

            <Auth.Screen
                name="ForgotPassword"
                component={ForgotPassword}
                options={{
                headerShown: false
            }}
            />

            <Auth.Screen
                name="OtpScreen"
                component={OtpScreen}
                options={{
                headerShown: false
            }}
            />

            <Auth.Screen
                name="ResetPassword"
                component={ResetPassword}
                options={{
                headerShown: false
            }}
            />
        </Auth.Navigator>
    )
}

export default AuthNavigator;