//import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { GluestackUIProvider, Button, ButtonText } from '@gluestack-ui/themed';
import { config } from "@gluestack-ui/config";

const Button = (props) => {
  return (
    <GluestackUIProvider config={config}>
      <Button py="$1.5" action="secondary" onPress={props.onPress}>
          <ButtonText fontWeight="$medium">
            {props.text}
          </ButtonText>
      </Button>
    </GluestackUIProvider>
  );
};

export default Button;