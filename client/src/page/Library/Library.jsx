import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import PSALMS from "../../assets/images/PSALMS.jpg";
import book from "../../assets/images/101 ESSAYS.jpg";
import harry from "../../assets/images/Harry-Potter.jpg";
import harryP from "../../assets/images/Prison-Of-Azkaban.jpg";
import nagraj from "../../assets/images/nag-raj.jpg";
import Kinfolk from "../../assets/images/KINFOLK.jpg";
import twotower from "../../assets/images/Two-Towers.jpg";
import innvations from "../../assets/images/How-Innvations-Works.jpg";
import king from "../../assets/images/Black-Thin-King.jpg";
import blank from "../../assets/images/Blank-Book.jpg";
import order from "../../assets/images/Order-Of-Pheonix.jpg";
import psy from "../../assets/images/PSYCHOLOGY.jpg";
import one from "../../assets/images/Onepiece.jpg";
import porter from "../../assets/images/Harry-Potter-Sorcerer's Stone.jpg";
import hope from "../../assets/images/HOPE.jpg";
import four from "../../assets/images/FourBOOKS.jpg";
import student from "../../assets/images/libraryImg.png";
import { GoArrowRight } from "react-icons/go";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const bookCard = [
  {
    status: "Not Available",
    img: PSALMS,
    name: "PSALMS",
    available: 10,
    totalCopies: 20,
    issuedCopies: 10,
  },
  {
    status: "Available",
    img: harry,
    name: "Harry-Potter",
    available: 10,
    totalCopies: 20,
    issuedCopies: 10,
  },
  {
    status: "Available",
    img: harryP,
    name: "Prison Of Azkaban",
    available: 10,
    totalCopies: 20,
    issuedCopies: 10,
  },
  {
    status: "Not Available",
    img: book,
    name: "101 ESSAYS",
    available: 10,
    totalCopies: 20,
    issuedCopies: 10,
  },
  {
    status: "Available",
    img: nagraj,
    name: "Nagraj Comics",
    available: 10,
    totalCopies: 20,
    issuedCopies: 10,
  },
  {
    status: "Available",
    img: Kinfolk,
    name: "KINFOLK",
    available: 10,
    totalCopies: 20,
    issuedCopies: 10,
  },
  {
    status: "Not Available",
    img: twotower,
    name: "Two Towers",
    available: 10,
    totalCopies: 20,
    issuedCopies: 10,
  },
  {
    status: "Available",
    img: innvations,
    name: "How Innvations Works",
    available: 10,
    totalCopies: 20,
    issuedCopies: 10,
  },
  {
    status: "Not Available",
    img: king,
    name: "Black Thin King",
    available: 10,
    totalCopies: 20,
    issuedCopies: 10,
  },
  {
    status: "Not Available",
    img: blank,
    name: "Empty",
    available: 10,
    totalCopies: 20,
    issuedCopies: 10,
  },
  {
    status: "Available",
    img: order,
    name: "Order Of Pheonix",
    available: 10,
    totalCopies: 20,
    issuedCopies: 10,
  },
  {
    status: "Not Available",
    img: psy,
    name: "PSYCHOLOGY",
    available: 10,
    totalCopies: 20,
    issuedCopies: 10,
  },
  {
    status: "Available",
    img: one,
    name: "One Piece",
    available: 10,
    totalCopies: 20,
    issuedCopies: 10,
  },
  {
    status: "Available",
    img: porter,
    name: "Harry Potter Sorcerer's Stone",
    available: 10,
    totalCopies: 20,
    issuedCopies: 10,
  },
  {
    status: "Available",
    img: four,
    name: "Game Of Thrones",
    available: 10,
    totalCopies: 20,
    issuedCopies: 10,
  },
  {
    status: "Available",
    img: hope,
    name: "HOPE",
    available: 10,
    totalCopies: 20,
    issuedCopies: 10,
  },
];

function Library() {

  
    const [value, setValue] = useState(new Date());

  return (
    <div>
      <div className="d-flex justify-content-between p-4 align-items-center">
        <h3>Books Overview</h3>
        <button className="btn bg-primary p-2 text-white border-rounded">
          <FaPlus className="text-white" /> &nbsp; Add
        </button>
      </div>
      <div className="d-flex gap-3 mt-3">
        <div className="w-75">
          <div className="d-flex justify-content-evenly gap-4 ">
            <span
              style={{ color: "#717376", fontWeight: "400", fontSize: "20px" }}
            >
              A &nbsp; B &nbsp; C &nbsp; D &nbsp; E &nbsp; F &nbsp; G &nbsp; H
              &nbsp; I &nbsp; J &nbsp; K &nbsp; L &nbsp; M &nbsp; N &nbsp; O
              &nbsp; P &nbsp; Q &nbsp; R &nbsp; S &nbsp; T &nbsp; U &nbsp; V
              &nbsp; W &nbsp; X &nbsp; Y &nbsp; Z
            </span>
          </div>
          <div className="mt-3 p-4">
            <div className="row">
              {bookCard.map((book, idx) => (
                <div key={idx} className="col-3 p-3">
                  <div className="p-4 rounded bg-white">
                    <div className="d-flex">
                      <div className="d-flex align-items-center justify-content-between w-100">
                        <div className="rounded">
                          <img src={book.img} alt="" className="books" />
                        </div>

                        <div
                          className={`rounded shadow-sm d-flex justify-content-center align-items-center px-2 mt-1 
                            ${
                              book.status === "Available"
                                ? "bg-white text-success"
                                : "bg-white text-danger"
                            }`}
                        >
                          <h6 className="m-0">{book.status}</h6>
                        </div>
                      </div>
                    </div>

                    <div className="mt-3 text-center">
                      <h5>{book.name}</h5>
                    </div>

                    <div className="mt-2">
                      <div className="d-flex justify-content-between book-text">
                        <label>Total Copies</label>
                        <span>{book.totalCopies}</span>
                      </div>
                      <div className="d-flex justify-content-between mt-1 book-text">
                        <label>Issued Copies</label>
                        <span>{book.issuedCopies}</span>
                      </div>
                      <div className="d-flex justify-content-between mt-1 book-text">
                        <label>Available Copies</label>
                        <span>{book.totalCopies - book.issuedCopies}</span>
                      </div>
                    </div>

                    <div className="mt-3">
                      <div className="d-flex gap-3">
                        <button className="library-btn btn btn-outline-secondary">
                          View Details
                        </button>
                        <button className="history-btn btn">
                          View Issued History
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-25 left-shadow bg-white p-4 rounded">
          <h5 className="other-library">Other Library Moduels</h5>
          <div className="mt-4 d-flex justify-content-between align-items-center">
            <div className="d-flex gap-2">
              <div className="image">
              <img src={student} alt="" className="img-student" />
            </div>
            <div className="d-flex flex-column">
              <label className="return-issue">Book Issue & Return Entries</label>
              <span className="staff">Staff - 20</span>
            </div>
            </div>
            <div>
              <span className="staff-arrow">
                <GoArrowRight />
              </span>
            </div>
          </div>
          <div className="mt-3 d-flex justify-content-between align-items-center">
            <div className="d-flex gap-2">
              <div className="image">
              <img src={student} alt="" className="img-student" />
            </div>
            <div className="d-flex flex-column">
              <label className="return-issue">Library Staff</label>
              <span className="staff">Staff - 20</span>
            </div>
            </div>
            <div>
              <span className="staff-arrow">
                <GoArrowRight />
              </span>
            </div>
          </div>
          <div className="mt-3 d-flex justify-content-between align-items-center">
            <div className="d-flex gap-2">
              <div className="image">
              <img src={student} alt="" className="img-student" />
            </div>
            <div className="d-flex flex-column">
              <label className="return-issue">Fine Management & Rules</label>
              <span className="staff">Staff - 20</span>
            </div>
            </div>
            <div>
              <span className="staff-arrow">
                <GoArrowRight />
              </span>
            </div>
          </div>
          <div className="mt-3 d-flex justify-content-between align-items-center">
            <div className="d-flex gap-2">
              <div className="image">
              <img src={student} alt="" className="img-student" />
            </div>
            <div className="d-flex flex-column">
              <label className="return-issue">Book Maintainances</label>
              <span className="staff">Staff - 20</span>
            </div>
            </div>
            <div>
              <span className="staff-arrow">
                <GoArrowRight />
              </span>
            </div>
          </div>

          {/* <------------------------------------------ Calender -------------------------------------> */}
          
            <div className="mt-4">
              <div>
                <Calendar onChange={setValue} value={value} />
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Library;
