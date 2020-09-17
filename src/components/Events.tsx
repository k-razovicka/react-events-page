import React, { useState } from "react";
import { formatDate } from "../helpers/FormatDate";
import ModalEvent from "./ModalEvent";

const Events = (props: any) => {
  const [modalShow, setModalShow] = useState(false);
  const [modalEventTitle, setModalEventTitle] = useState("");
  const [modalEventText, setModalEventText] = useState("");
  const [modalEventImage, setModalEventImage] = useState("");
  const [modalEventDate, setModalEventDate] = useState("");

  const handleModal = (
    title: string,
    text: string,
    image: string,
    date: string
  ) => {
    setModalShow(true);
    setModalEventTitle(title);
    setModalEventText(text);
    setModalEventImage(image);
    setModalEventDate(date);
    console.log(title);
    console.log(text);
  };
  return (
    <div className="row px-5 pt-2">
      {props.eventsToRender.map((event: any, index: any) => (
        <div key={index} className="col-md-4 col-sm-6">
          <p className="date">{formatDate(`${event.date}`)}</p>
          {event.lead_image ? (
            <img src={`${event.lead_image}`} width="100%" alt="" />
          ) : (
            <img src="https://via.placeholder.com/150" width="100%" alt="" />
          )}

          <p className="category-type mt-3">{event.type}</p>

          <p
            onClick={() =>
              handleModal(
                `${event.title}`,
                `${event.full_text}`,
                `${event.lead_image}`,
                `${event.date}`
              )
            }
            className="title "
          >
            {event.title}
          </p>
        </div>
      ))}

      <ModalEvent
        show={modalShow}
        onHide={() => setModalShow(false)}
        title={modalEventTitle}
        text={modalEventText}
        image={modalEventImage}
        date={modalEventDate}
      />
    </div>
  );
};
export default Events;
