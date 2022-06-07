import { layThongTinChiTietNguoiDungAction } from "../../redux/actions/QuanLyNguoiDungAction";
import HeaderNotForHomePage from "../../_Component/Header/HeaderNotForHomePage";
import { useDispatch, useSelector } from "react-redux";
import { USER_LOGIN } from "../../util/config";
import { Redirect } from "react-router-dom";
import React, { useEffect } from "react";
import moment from "moment";
import "./Profile.scss";

export default function Profile(props) {
  const { chiTietLoaiCongViecChinh } = useSelector(
    (state) => state.QuanLyCongViecReducer
  );
  const { userLogin, thongTinChiTietNguoiDung } = useSelector(
    (state) => state.QuanLyNguoiDungReducer
  );

  console.log(thongTinChiTietNguoiDung);

  const dispatch = useDispatch();

  useEffect(() => {
    const action = layThongTinChiTietNguoiDungAction(userLogin._id);
    dispatch(action);
  }, []);

  // Kiểm tra trong localStorage nếu chưa đăng nhập thì chuyển về trang login
  if (!localStorage.getItem(USER_LOGIN)) {
    alert("You are not logged in !");
    return <Redirect to="/login" />;
  }

  return (
    <section>
      <HeaderNotForHomePage />

      <div id="profile">
        <div className="container py-5">
          <div className="profile-info">
            <div className="info-preview">
              <div className="card">
                <div className="card-body text-center">
                  <div className="d-flex justify-content-center">
                    {thongTinChiTietNguoiDung.image ? (
                      <img src={thongTinChiTietNguoiDung.image} alt="avatar" />
                    ) : (
                      <div
                        style={{
                          width: "100px",
                          height: "100px",
                          backgroundColor: "rgb(168, 253, 254)",
                          borderRadius: "50%",
                          border: "1px solid rgb(221, 221, 221)",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <h1
                          style={{
                            fontSize: "35px",
                            padding: "0",
                            fontWeight: "bold",
                          }}
                        >
                          {thongTinChiTietNguoiDung.name?.slice(0, 1)}
                        </h1>
                      </div>
                    )}
                  </div>
                  <h1>{thongTinChiTietNguoiDung.name}</h1>
                  <div className="email-phone-birthday mb-3">
                    <p>
                      Birthday:{" "}
                      {moment(thongTinChiTietNguoiDung.birthday).format(
                        "DD/MM/YYYY"
                      )}
                    </p>
                    <p>Phone: {thongTinChiTietNguoiDung.phone}</p>
                    <p>Email: {thongTinChiTietNguoiDung.email}</p>
                  </div>
                  <button className="edit-info" title="Edit info">
                    <i class="fa fa-pencil-alt"></i>
                  </button>
                  <hr />
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span>
                      <i class="fa fa-map-marker-alt"></i> From
                    </span>
                    <p>Viet Nam</p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <span>
                      <i class="fa fa-user"></i>Member since
                    </span>
                    <p>May 2022</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="info-description">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="font-weight-bold mb-0">Description</p>
                    <a href="#" title="Edit description">
                      Edit Description
                    </a>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="font-weight-bold mb-0">Languages</p>
                    <a href="#" title="Add new languages">
                      Add New
                    </a>
                  </div>
                  <hr />
                  <div>
                    <p className="font-weight-bold mb-2">Linked Accounts</p>
                    <ul>
                      <li>
                        <a
                          href="https://www.facebook.com/"
                          title="Facebook"
                          target="_blank"
                        >
                          <i class="fa fa-plus"></i>FaceBook
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.google.com/"
                          title="Google"
                          target="_blank"
                        >
                          <i class="fa fa-plus"></i>Google
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://dribbble.com/"
                          title="Dribble"
                          target="_blank"
                        >
                          <i class="fa fa-plus"></i>Dribbble
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://stackoverflow.com/"
                          title="Stack Overflow"
                          target="_blank"
                        >
                          <i class="fa fa-plus"></i>Stack Overflow
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://github.com/"
                          title="GitHub"
                          target="_blank"
                        >
                          <i class="fa fa-plus"></i>GitHub
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://vimeo.com/"
                          title="Vimeo"
                          target="_blank"
                        >
                          <i class="fa fa-plus"></i>Vimeo
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.twitter.com/"
                          title="Twitter"
                          target="_blank"
                        >
                          <i class="fa fa-plus"></i>Twitter
                        </a>
                      </li>
                    </ul>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="font-weight-bold mb-0">Skill</p>
                    <a href="#" title="Add new skill">
                      Add New
                    </a>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="font-weight-bold mb-0">Education</p>
                    <a href="#" title="Add new education">
                      Add New
                    </a>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="font-weight-bold mb-0">Certification</p>
                    <a href="#" title="Add new certification">
                      Add New
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="info-activity">
              <div className="card">
                <div className="card-body">
                  <h1>Shared activity information</h1>
                  <p>
                    In order to provide the best possible work and service, some
                    information about your activity on Fiverr may be shared with
                    sellers
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="profile-job">
            <div className="buying-service">
              <img
                src="./img/Profile/buying-service-img.webp"
                alt="buying-service-img"
              />
              <div>
                <h1>Using Fiverr for work?</h1>
                <p>
                  Expand your in-house capabilities with vetted freelancers for
                  every project.
                </p>
                <button
                  type="button"
                  class="btn btn-primary"
                  data-toggle="modal"
                  data-target="#exampleModalCenter"
                >
                  Learn about Fiverr Business
                </button>
                <div
                  class="modal fade"
                  id="exampleModalCenter"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalCenterTitle"
                  aria-hidden="true"
                >
                  <div
                    class="modal-dialog modal-dialog-centered  mx-auto"
                    role="document"
                  >
                    <div class="modal-content">
                      <div class="modal-body m-0 p-0 position-relative">
                        <button
                          type="button"
                          class="close"
                          title="Close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <i class="fa fa-times"></i>
                        </button>
                        <img
                          src="./img/Profile/buying-service-modal-img.webp"
                          alt="..."
                        />

                        <div>
                          <h1>
                            <i>Freelancers</i> you trust, <i>Flexibility</i> you
                            need.
                          </h1>
                          <ul>
                            <li>
                              <i class="text-success fa fa-check"></i>Connect
                              with Fiverr’s vetted freelancers
                            </li>
                            <li>
                              <i class="text-success fa fa-check"></i>Streamline
                              and scale your team initiatives
                            </li>

                            <li>
                              <i class="text-success fa fa-check"></i>Access
                              priority business support and Talent Matching
                            </li>
                          </ul>
                          <button>Explore Fiverr Business</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="new-gig">
              <p>It seems that you don't have any active Gigs. Get selling!</p>
              <button
                type="button"
                data-toggle="modal"
                data-target="#exampleModalCenter2"
              >
                Create a new Gig{" "}
              </button>
              <div
                class="modal fade"
                id="exampleModalCenter2"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalCenterTitle2"
                aria-hidden="true"
              >
                <div
                  class="modal-dialog modal-dialog-centered  mx-auto"
                  role="document"
                >
                  <div class="modal-content">
                    <div class="modal-body m-0 p-0 position-relative">
                      <button
                        type="button"
                        class="close"
                        title="Close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <i class="fa fa-times"></i>
                      </button>
                      <div>
                        <h1>
                          Ready to start selling on Fiverr? Here’s the
                          breakdown:
                        </h1>
                        <hr />
                        <div className="item">
                          <img
                            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iNDMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNLTYgNDMuMTg5aDQ0Vi0uOTYySC02eiIvPjxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik01LjQyNSAxLjMyNUgyLjg4NkwxLjE5NCAzLjg3MnYzMC41NjZsLjg0NiAyLjU0NyA1LjkyMy44NXYzLjM5Nmw0LjIzLTIuNTQ4IDMuMzg2IDEuNjk5Ljg0Ni0yLjU0OGgxMWwyLjUzOC0uODQ5Ljg0Ni0yLjU0N1YzLjg3MmwtMi4yOC0yLjU4N3oiLz48cGF0aCBkPSJNMjkuOTYzIDIuMTc0aC0uODQ2di0uODQ5aC00LjIzdi41MkgzLjE1MmMtLjU0MiAwLTEuMDU1LjExMi0xLjUzNi4yOXYxLjczN3MxLjM0OC0uMDYyIDEuNTM2LS4wNjJoMjIuMzFjMS40IDAgMi41NCAxLjE0MyAyLjU0IDIuNTQ4djIwLjE2NWMwIC44NDItLjQ1NyAxLjU3LTEuMTMgMS45NzJoMy4wODlWNi4zNThjMC0uMjctLjAzNS0uNTMtLjA4LS43ODhoLjA4MlYyLjE3NHoiIGZpbGw9IiNERUUwRTIiLz48cGF0aCBmaWxsPSIjQTFGNEMwIiBkPSJNOC44MSAzMi43NGwtLjg0NyA3LjY0MiAzLjk4Ni0xLjU5IDQuNDc2IDIuNDM5di04LjQ5eiIvPjxwYXRoIGQ9Ik05LjE4OSAzOS4zMXYtNS4zN2g2LjEyN3Y1LjQwOGwtMi41OC0xLjU4YS45NzUuOTc1IDAgMDAtMS4wMiAwTDkuMTkgMzkuMzA5em04LjA4NS0yLjUzdi0yLjg0aDEwLjEyOWMuODQzIDAgMS42My0uMjUyIDIuMjkxLS42OHYuOTcyYTIuNTQ2IDIuNTQ2IDAgMDEtMi41NCAyLjU0OGgtOS44OHptLTEyLjQzIDBhMi41NDYgMi41NDYgMCAwMS0yLjUzOS0yLjU0OFYzMS4zOWMwLTEuMjY4IDEuMDI4LTIuMyAyLjI5MS0yLjNoMjIuODA3Yy44NDMgMCAxLjYzLS4yNTIgMi4yOTEtLjY4djEuMjY2YzAgMS4yNjgtMS4wMjcgMi4zLTIuMjkxIDIuM0g2LjQ3NWMtLjU0IDAtLjk4LjQ0LS45OC45ODNhLjk4Ljk4IDAgMDAuOTguOTgxaC43NTZ2Mi44NDFINC44NDR6bS0yLjUzOS04Ljk3NlY0LjY2YTIuNTQ3IDIuNTQ3IDAgMDEyLjU0LTIuNTQ5aDEuMDlWMjYuNzNjMCAuMTQuMDMuMjc0LjA4NC4zOTVINC41OTdjLS44NDQgMC0xLjYzLjI1MS0yLjI5Mi42Nzl6bTUuNTA0LS42OGEuOTg3Ljk4NyAwIDAwLjA4My0uMzk0VjIuMTFoMTkuMjYzYzEuNCAwIDIuNTQgMS4xNDQgMi41NCAyLjU1djIwLjE2M2MwIDEuMjctMS4wMjggMi4zLTIuMjkyIDIuM0g3LjgwOXpNMjcuMTU1LjE0OUg0Ljg0NUMyLjM2NS4xNDguMzQ4IDIuMTcyLjM0OCA0LjY2djI5LjU3MmMwIDIuNDg5IDIuMDE3IDQuNTEzIDQuNDk3IDQuNTEzaDIuMzg2djIuMzExYS45ODUuOTg1IDAgMDAuOTc5Ljk4Mi45NzIuOTcyIDAgMDAuNTA5LS4xNDNsMy41MDYtMi4xNCAzLjU2MSAyLjE4MWEuOTc4Ljk3OCAwIDAwMS40ODgtLjg0di0yLjM1MWg5Ljg4YzIuNDgxIDAgNC40OTgtMi4wMjQgNC40OTgtNC41MTNWNC42NmMwLTIuNDg4LTIuMDE3LTQuNTEyLTQuNDk3LTQuNTEyeiIgZmlsbD0iIzRENTM1QiIvPjwvZz48L3N2Zz4="
                            alt="..."
                          />
                          <div className="content">
                            <h1>Learn what makes a successful profile</h1>
                            <p>
                              Discover the do’s and don’ts to ensure you’re
                              always on the right track.
                            </p>
                          </div>
                        </div>
                        <hr />
                        <div className="item">
                          <img
                            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNLS44MzMgNDAuMzc1aDQxLjIwOFYtLjgzMkgtLjgzM3oiLz48cGF0aCBkPSJNMzguMTI3IDE5Ljg3YzAgMTAuMjg1LTguMzM3IDE4LjYyMy0xOC42MjIgMTguNjIzQzkuMjE5IDM4LjQ5My44ODIgMzAuMTU1Ljg4MiAxOS44Ny44ODIgOS41ODUgOS4yMiAxLjI0OCAxOS41MDUgMS4yNDhjMTAuMjg1IDAgMTguNjIyIDguMzM3IDE4LjYyMiAxOC42MjIiIGZpbGw9IiNGRkYiLz48cGF0aCBkPSJNOC44MDcgNC40MTdjLS4zNC45MDMtMS40NjQuOTA4LTIuMzc4IDEuNTg1LTEuMjE3LjkwMy0xLjUyNSAyLjU5Ny0xLjU4NyAzLjk5M2ExNy40IDE3LjQgMCAwMTEzLjQ3NC02LjM3YzkuNjI4IDAgMTcuNDM0IDcuODA2IDE3LjQzNCAxNy40MzRhMTcuMzcgMTcuMzcgMCAwMS00LjY2OCAxMS44NjggNS4wNDMgNS4wNDMgMCAwMTIuMjkuMDE5Yy4yMS4wNS40Mi4xMjMuNjMxLjIwNmExOS43MjIgMTkuNzIyIDAgMDA0LjEyNC0xMi4wOTNjMC0xMC45NDItOC44Ny0xOS44MTEtMTkuODExLTE5LjgxMS0zLjQxNCAwLTYuNjI1Ljg2My05LjQyOSAyLjM4M2ExLjc3IDEuNzcgMCAwMS0uMDguNzg2IiBmaWxsPSIjREVFMEUyIi8+PHBhdGggZD0iTTE5Ljc3IDM3LjQ5MWExNy41MiAxNy41MiAwIDAxLTEwLjQ5MS0zLjQ1NGM2LjEzMy0yLjY0MiA3LjI2NC0zLjk0NiA3LjU1My00Ljg3MWEuOTgzLjk4MyAwIDAwLjA0NS0uMjk2di0xLjYzOGEuOTguOTggMCAwMC0uMjgzLS42OTRjLS45ODEtMS4wMDMtMS43NDMtMi40MDEtMi4yLTQuMDQzYS45OTYuOTk2IDAgMDAtLjM4NS0uNTQzIDEuNjYzIDEuNjYzIDAgMDEtLjY5NC0xLjM2MmMwLS40ODMuMjA3LS44NC4zODEtMS4wNTRhLjk5NS45OTUgMCAwMC4yMjEtLjYyNXYtMy42NzJjMC0zLjQ3OCAyLjExMi01LjM5NCA1Ljk0Ny01LjM5NCAzLjg4OCAwIDUuOTQ0IDEuODY2IDUuOTQ0IDUuMzk0djMuNjcyYzAgLjIyNy4wOC40NDguMjIyLjYyNS4xNzUuMjEzLjM4Mi41NzEuMzgyIDEuMDU0YTEuNjYgMS42NiAwIDAxLS42OTUgMS4zNjIuOTk2Ljk5NiAwIDAwLS4zODQuNTQzYy0uNDU5IDEuNjQtMS4yMiAzLjAzOC0yLjIwMSA0LjA0M2EuOTkxLjk5MSAwIDAwLS4yODIuNjk0djEuNjM4YzAgLjEwMS4wMTUuMi4wNDUuMjk2LjMuOTY3IDEuNDE5IDIuMjIxIDcuNDM2IDQuODIxYTE3LjUyIDE3LjUyIDAgMDEtMTAuNTYgMy41MDRNNy41NzUgMzIuNjA4YTE3Ljc4NCAxNy43ODQgMCAwMS01LjUyMy0xMi44MzdjMC05Ljc2OSA3Ljk0OS0xNy43MTkgMTcuNzE5LTE3LjcxOSA5Ljc3IDAgMTcuNzIgNy45NSAxNy43MiAxNy43MiAwIDQuODY4LTEuOTQyIDkuNDAzLTUuNDY5IDEyLjc4Mi01Ljc5My0yLjQzMi02Ljk1OC0zLjU1Ny03LjE5LTMuODk4VjI3LjYyYzEuMDA4LTEuMTM0IDEuODA5LTIuNjEgMi4zMTctNC4yNzhhMy42MzUgMy42MzUgMCAwMDEuMjQ1LTIuNzUzIDMuNjIgMy42MiAwIDAwLS42MDUtMi4wMDNWMTUuMjRjMC00LjY4Ni0yLjg4OC03LjM3NS03LjkyNS03LjM3NS00Ljk2NCAwLTcuOTI4IDIuNzU3LTcuOTI4IDcuMzc1djMuMzVhMy42NCAzLjY0IDAgMDAtLjYwMiAyLjAwMWMwIDEuMDYzLjQ1MSAyLjA2MyAxLjI0MiAyLjc1My41MDkgMS42NjcgMS4zMSAzLjE0NCAyLjMyIDQuMjc4djEuMDM1Yy0uMjM1LjM0My0xLjQxNyAxLjQ4Mi03LjMyIDMuOTUyTTE5Ljc3LjA3MUM4LjkwOC4wNzEuMDcgOC45MDkuMDcgMTkuNzcxYzAgMTAuODY0IDguODM3IDE5LjcwMiAxOS43IDE5LjcwMnMxOS43LTguODM4IDE5LjctMTkuNzAyYzAtMTAuODYyLTguODM3LTE5LjctMTkuNy0xOS43IiBmaWxsPSIjNEQ1MzVCIi8+PC9nPjwvc3ZnPg=="
                            alt="..."
                          />
                          <div className="content">
                            <h1>Create your seller profile</h1>
                            <p>
                              Add your profile picture, description, and
                              professional information.
                            </p>
                          </div>
                        </div>
                        <hr />
                        <div className="item">
                          <img
                            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDEiIGhlaWdodD0iMzkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNLS4zNiA0MGg0MS4yMDdWLTFILS4zNnoiLz48cGF0aCBmaWxsPSIjRkZGIiBkPSJNNy4yNyAxLjQ5N0wuOTMgOS4zODJsLjc5MyAzLjE1NCAzLjE3Ljc4OHYyMy42NTRIMzUuOFYxMy4zMjRsMi4zNzctLjc4OCAxLjU4NS0zLjE1NC02LjM0LTcuODg1eiIvPjxwYXRoIGZpbGw9IiNERUUwRTIiIGQ9Ik01LjY4NiA0LjY1aDI5LjMyVjIuMjg3SDUuNjg3em00Ljc1NCAyMC41aDcuMTMzdi0yLjM2NEgxMC40NHoiLz48cGF0aCBmaWxsPSIjREVFMEUyIiBkPSJNMTUuMTk1IDM3Ljc2NmgyLjM3OHYtMTQuOThoLTIuMzc4em0xOC4yMjcgMGgyLjM3N1YxMy4zMjVoLTIuMzc3eiIvPjxwYXRoIGZpbGw9IiNBMUY0QzAiIGQ9Ik0xMC40NCAzNi45NzhoNy4xMzN2LTE0Ljk4SDEwLjQ0em0xMi42OC05LjQ2Mmg3LjEzMnYtNS41MTlIMjMuMTJ6Ii8+PGcgZmlsbD0iIzRENTM1QiI+PHBhdGggZD0iTTExLjUyMyAzNi4zNDZoNS4yOTVWMjMuMTIxaC01LjI5NXYxMy4yMjV6bTI0LjU4NC0yMC44NzVhLjk5Ljk5IDAgMDAtLjk5Ljk4NnYxOS44OUgxOC43OTlWMjIuMTM2YS45ODkuOTg5IDAgMDAtLjk5LS45ODZoLTcuMjc2YS45ODkuOTg5IDAgMDAtLjk5MS45ODZ2MTQuMjExSDUuNTg0di0xOS44OWEuOTkuOTkgMCAwMC0uOTktLjk4Ni45ODkuOTg5IDAgMDAtLjk5Ljk4NnYyMC44NzZjMCAuNTQzLjQ0My45ODUuOTkuOTg1aDMxLjUxM2EuOTg5Ljk4OSAwIDAwLjk5MS0uOTg1VjE2LjQ1N2EuOTg5Ljk4OSAwIDAwLS45OS0uOTg2eiIvPjxwYXRoIGQ9Ik0yNC4wODcgMjYuNzkyaDQuODc2di0zLjY3aC00Ljg3NnYzLjY3em01Ljg2OC01LjY0MmgtNi44NThhLjk5Ljk5IDAgMDAtLjk5Ljk4NnY1LjY0M2EuOTkuOTkgMCAwMC45OS45ODVoNi44NThhLjk5Ljk5IDAgMDAuOTktLjk4NXYtNS42NDNhLjk5Ljk5IDAgMDAtLjk5LS45ODZ6TTQuOSAxMi41MDVjLTEuNDQxIDAtMi42Ny0xLjA5OC0yLjgzLTIuNTE0bDUuNzU3LTcuMzM5SDMyLjY5bDUuNzI4IDcuMzM5Yy0uMTU5IDEuNDE2LTEuMzg3IDIuNTE0LTIuODMgMi41MTRhMi45NTkgMi45NTkgMCAwMS0xLjAwNy0uMTg2IDMuMDAyIDMuMDAyIDAgMDEtLjc5OC0uNDU3LjYwNC42MDQgMCAwMC0uMDUzLS4wNSAyLjg0MyAyLjg0MyAwIDAxLS40MDQtLjQzMWwtLjA1NS0uMDczYTIuODA3IDIuODA3IDAgMDEtLjUyOC0xLjYzNC45OS45OSAwIDAwLS45OS0uOTg1Ljk4OS45ODkgMCAwMC0uOTkxLjk4NiAyLjg0IDIuODQgMCAwMS0yLjg0NCAyLjgzIDIuODQyIDIuODQyIDAgMDEtMi44NDgtMi44My45ODkuOTg5IDAgMDAtLjk5LS45ODYuOTkuOTkgMCAwMC0uOTkuOTg2IDIuODQgMi44NCAwIDAxLTIuODQ2IDIuODMgMi44NCAyLjg0IDAgMDEtMi44NDctMi44My45OS45OSAwIDAwLS45OS0uOTg2Ljk4OS45ODkgMCAwMC0uOTkxLjk4NiAyLjg0IDIuODQgMCAwMS0yLjg0NCAyLjgzIDIuODQgMi44NCAwIDAxLTIuODQ2LTIuODMuOTkuOTkgMCAwMC0uOTktLjk4Ni45ODkuOTg5IDAgMDAtLjk5MS45ODZjMCAuNDEtLjA5LjgxLS4yNzEgMS4xOTVhMy4wNzcgMy4wNzcgMCAwMS0uMTYzLjI5OSAyLjk1NCAyLjk1NCAwIDAxLS45MDQuOTAzYy0uMDgxLjA1LS4xNjYuMDk0LS4yODUuMTUzLS4wODguMDQxLS4xNzYuMDc4LS4yMTYuMDk2bC4wNzUuMTgtLjE1NC0uMTU0YTIuODU0IDIuODU0IDAgMDEtLjkyNy4xNThNMzMuMTc1LjY4MUg3LjM0NGEuOTg4Ljk4OCAwIDAwLS43OC4zNzlMLjI4IDkuMDY4YS45ODEuOTgxIDAgMDAtLjIxLjYwN2MwIDIuNjQ3IDIuMTY2IDQuODAxIDQuODI5IDQuODAxYTQuOTQgNC45NCAwIDAwMS42MzgtLjI5IDQuNDQyIDQuNDQyIDAgMDAuNS0uMjEyIDQuNzg2IDQuNzg2IDAgMDAxLjY5My0xLjM5NSA0LjgzMSA0LjgzMSAwIDAwMy44NCAxLjg5N2MxLjUxIDAgMi45MjMtLjcgMy44MzUtMS44OWE0LjgzNyA0LjgzNyAwIDAwNy42NzQgMCA0Ljg0IDQuODQgMCAwMDcuNjc1LS4wMDJjLjA4LjEwNi4xNjQuMjA0LjIxMy4yNTUuMDI3LjAzNC4wNTYuMDY3LjExNi4xMzEuMTA3LjExMi4yMi4yMi4zMzQuMzE5bC4wMzYuMDMyYTQuODYgNC44NiAwIDAwMy4xMzUgMS4xNTVjMi42NjIgMCA0LjgyOC0yLjE1NCA0LjgyOC00LjgwMWEuOTgzLjk4MyAwIDAwLS4yMDgtLjYwNWwtNi4yNTItOC4wMDdhMSAxIDAgMDAtLjc4Mi0uMzgyIi8+PC9nPjwvZz48L3N2Zz4="
                            alt="..."
                          />
                          <div className="content">
                            <h1>Publish your Gig</h1>
                            <p>
                              Create a Gig of the service you’re offering and
                              start selling instantly.
                            </p>
                          </div>
                        </div>
                        <hr />
                        <button
                          className="py-2 px-4"
                          style={{ fontSize: "16px" }}
                          title="Continue"
                        >
                          Continue
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="history-booking"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
