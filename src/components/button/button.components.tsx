import React from 'react';
import { IonFab, IonFabButton,IonChip,IonIcon,IonBadge,IonList, IonItem, IonLabel, IonInput, IonToggle, IonRadio, IonCheckbox, IonItemSliding, IonItemOption, IonItemOptions, IonContent } from '@ionic/react';
import './button.components.css';
import { add,pin, heart, closeCircle, close, hammer } from 'ionicons/icons';
interface btnProps {
  toggle: any
}
const Button: React.FC<btnProps> = (btnProps) => {
const click = () => {
  btnProps.toggle();
};
return(
  <IonFab vertical="top" horizontal="end" slot="fixed">
  <IonFabButton onClick={click}>
    <IonIcon icon={add} />
  </IonFabButton>
  </IonFab>
)
};

export {Button};