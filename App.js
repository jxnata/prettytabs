import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';

function HomeScreen() {
	return (
		<View style={styles.container}>
			<Text>Home!</Text>
		</View>
	);
}

function ListScreen() {
	return (
		<View style={styles.container}>
			<Text>Categories!</Text>
		</View>
	);
}

function PostScreen() {
	return (
		<View style={styles.container}>
			<Text>New Post!</Text>
		</View>
	);
}

function NotificationsScreen() {
	return (
		<View style={styles.container}>
			<Text>Notifications!</Text>
		</View>
	);
}

function SettingsScreen() {
	return (
		<View style={styles.container}>
			<Text>Settings!</Text>
		</View>
	);
}

const Tab = createBottomTabNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Tab.Navigator
				screenOptions={({ route }) => ({
					tabBarIcon: ({ color, size }) => {
						let iconName;

						switch (route.name) {
							case 'Home':
								iconName = 'home';
								break;
							case 'Categories':
								iconName = 'list';
								break;
							case 'Post':
								iconName = 'edit';
								break;
							case 'Notifications':
								iconName = 'bell';
								break;
							case 'Settings':
								iconName = 'settings';
								break;
							default:
								iconName = 'circle';
								break;
						}

						return <Icon name={iconName} size={size} color={color} />;
					},
				})}
				tabBarOptions={{
					activeTintColor: '#9C27B0',
					inactiveTintColor: '#777',
					showLabel: false,
				}}
			>
				<Tab.Screen name="Home" component={HomeScreen} />
				<Tab.Screen name="Categories" component={ListScreen} />
				<Tab.Screen
					name="Post"
					component={PostScreen}
					options={() => ({
						tabBarIcon: ({tintColor}) => (
							<View>
								<LinearGradient style={styles.iconTabRound} start={{ x: 0, y: 1 }} end={{ x: 0, y: 0 }} colors={['#D500F9', '#4A148C']}>
									<Icon name="plus" size={26} color='#FFF'/>
								</LinearGradient>
							</View>
						),
					})}
				/>
				<Tab.Screen name="Notifications" component={NotificationsScreen} />
				<Tab.Screen name="Settings" component={SettingsScreen} />
			</Tab.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	iconTabRound: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 6,
        shadowColor: '#9C27B0',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    }
});