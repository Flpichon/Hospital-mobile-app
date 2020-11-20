import React, { useState, useEffect } from 'react';
import { IonChip,IonIcon,IonBadge,IonList, IonItem, IonLabel, IonInput, IonToggle, IonRadio, IonCheckbox, IonButton, IonItemSliding, IonItemOption, IonItemOptions, IonContent, IonModal } from '@ionic/react';
import './modal.component.css';
import { pin, heart, closeCircle, close, hammer } from 'ionicons/icons';
import {Item,Button, Form} from '../../components';
import { tokenToString } from 'typescript';
interface btnProps {
  toggle: any;
  show: boolean;
}
const Modal: React.FC<btnProps> = (btnProps) => {
  const [showModal, setShowModal] = useState(btnProps.show);
  useEffect(() => {
  });
  const toggle = () => {
    setShowModal(!showModal);
    btnProps.toggle();
  };
  return(
    <IonModal isOpen={btnProps.show}>
      <IonButton onClick={toggle}>Close</IonButton>
      <IonContent>
        <Form/>
      </IonContent>
    </IonModal>
  )
};

export {Modal};