import { wishes as idWishes } from "../../../pages/Home/translate/id.json";
import { wishes as enWishes } from "../../../pages/Home/translate/en.json";

export default function WishesList({ fromWho, fromWhere, wishes, contentLng }) {
  return (
    <>
      <div className="chat chat-start space-y-[4px]">
        <div className="chat-header">
          {fromWho}
          <span className="pl-1 text-xs opacity-60">
            {contentLng(idWishes.list.fromWhere, enWishes.list.fromWhere)}&nbsp;
            {fromWhere}
          </span>
        </div>
        <div className="chat-bubble p-[16px]">&quot;{wishes}&quot;</div>
      </div>
    </>
  );
}
