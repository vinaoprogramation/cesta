import { Text, SafeAreaView} from 'react-native';
import Sobrenome from './src/telas/Sobrenome';

export default function App() {
  return (
    <SafeAreaView>
      <Text> Vini </Text>
      <Sobrenome 
      sobrenome = 'Silva'
      />
    </SafeAreaView>
  );
}

