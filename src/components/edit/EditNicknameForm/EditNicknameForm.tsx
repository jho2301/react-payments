import { useEffect, useState, VFC } from 'react';
import { useHistory } from 'react-router';
import { ALERT } from '../../../constants/messages';
import PALETTE from '../../../constants/palette';
import { useCards } from '../../../context/CardsStateContext';
import { Card } from '../../../types';
import Button from '../../shared/Button';
import CreditCard from '../../shared/CreditCard';
import Input from '../../shared/Input';
import { EditNicknameFormContainer } from './styles';

interface Props {
  card: Card;
}

const EditNicknameForm: VFC<Props> = ({ card }) => {
  const history = useHistory();
  const [nickname, setNickname] = useState(card.nickname);
  const { editNickname, hasError } = useCards();

  const onSubmitNickname = () => {
    editNickname(nickname, card.id as string);

    if (hasError) {
      alert(ALERT.EDIT_NICKNAME_ERROR);
    }

    history.push('/');
  };

  useEffect(() => {
    setNickname(card.nickname);
  }, [card]);

  return (
    <EditNicknameFormContainer onSubmit={onSubmitNickname}>
      <header>카드등록이 완료되었습니다.</header>
      <CreditCard
        className="result-card"
        cardBrand={card.cardBrand}
        cardNumber={card.cardNumber}
        expDate={card.expDate}
        ownerName={card.ownerName}
        size="lg"
      />
      <Input
        color={PALETTE.BLACK_900}
        value={nickname}
        onChange={({ target: { value } }) => setNickname(value)}
        underline
        textCenter
        width="60%"
        height="2rem"
      />
      <Button type="submit" position="bottom-right">
        확인
      </Button>
    </EditNicknameFormContainer>
  );
};

export default EditNicknameForm;
