import { SearchBar } from 'react-native-elements';
import SettingsList from '/Users/cheimamezdour/kyoo-conseil/kyo-conseil/Components/Settings.js';
import Sidebar from '/Users/cheimamezdour/kyoo-conseil/kyo-conseil/comps/Sidebar.js'

const Settings = () => {

    
    return (

        <view style={styles.container}>
            <Sidebar />
            <SearchBar />
            <SettingsList />
        </view>

    );
};

export default Settings;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        borderColor:'#1D252E',

    }
})