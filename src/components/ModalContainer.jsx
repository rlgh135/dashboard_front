
import { useUIStore } from '../store/UIStore';
import Modal from './Modal';

const ModalContainer = () => {
  const { modal, closeModal } = useUIStore();

  if (!modal) return null;

  return (
    <Modal isOpen={!!modal} onClose={closeModal} title={modal.title}>
      {modal.content}
    </Modal>
  );
}

export default ModalContainer;
