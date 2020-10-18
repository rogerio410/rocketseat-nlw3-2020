import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const { Navigator, Screen } = createStackNavigator()

import OrphangesMap from './pages/OrphangesMap'
import OrphanageDetails from './pages/OrphanageDetails'
import OrphanageData from './pages/CreateOrphanage/OrphanageData'
import SelectMapPosition from './pages/CreateOrphanage/SelectMapPosition'
import Header from './components/Header'

export default function Routes() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: '#f2f3f5'
                }
            }}>
                <Screen name='OrphanagesMap' component={OrphangesMap} />

                <Screen
                    name='OrphanageDetails'
                    component={OrphanageDetails}
                    options={{
                        headerShown: true,
                        header: () => <Header showCancel={false} title='Orfanato' />
                    }}
                />

                <Screen
                    name='SelectMapPosition'
                    component={SelectMapPosition}
                    options={{
                        headerShown: true,
                        header: () => <Header title='Selecione no Mapa' />
                    }}
                />

                <Screen
                    name='OrphanageData'
                    component={OrphanageData}
                    options={{
                        headerShown: true,
                        header: () => <Header title='Dados do Orfanato' />
                    }}
                />
            </Navigator>
        </NavigationContainer>
    )
}