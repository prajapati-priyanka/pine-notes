import { FaSearch } from "react-icons/fa";
import { BiFilterAlt } from "react-icons/bi";
import { BsPin, BsTrash } from "react-icons/bs";
import { MdOutlineModeEditOutline, MdOutlineArchive } from "react-icons/md";
import {SideNav} from "../sidenav/SideNav"
import "./Main.css";

const Main = () => {
  return (
    <div className="main-container">
      <SideNav />
<main className="main-content">
      <section className="search-filter-container">
        <div className="search-container">
          <button type="submit" className="btn-search">
            <FaSearch />
          </button>
          <input
            type="search"
            placeholder="Type to search"
            className="input-search"
          />
        </div>
        <div className="filter-container">
          <BiFilterAlt title="Filter" />
        </div>
      </section>

      <section className="add-note-section">
        <div className="add-note-container">
          <input
            type="text"
            className="note-title"
            placeholder="Enter title.."
          />
          <textarea
            name="note-desc"
            id="note-desc"
            cols="10"
            rows="10"
            className="note-content"
            placeholder="Enter content.."
          />
          <div className="add-note-footer">
            <div className="note-select">
              <label for="note-label" className="label md-text">
                Label:
              </label>
              <select id="note-label" className="select">
                <option value="Label 1">Label 1</option>
                <option value="Label 2">Label 2</option>
                <option value="Label 3">Label 3</option>
              </select>
              <label for="note-priority" className="label md-text">
                Priority:
              </label>
              <select id="note-priority" className="select">
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
              <label for="note-color" className="label md-text">
                Color:
              </label>
              <select id="note-color" className="select">
                <option value="Red">Red</option>
                <option value="Blue">Blue</option>
                <option value="Green">Green</option>
              </select>
              <button className="btn btn-primary create-note-btn">
                Create Note
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="all-notes-section">
          <h4 className="all-notes-heading">All Notes</h4>
        <div className="all-notes-container">
          <div class="card notes-card card-with-dismiss">
            <div class="card-header">
              <div class="card-left">
                <h5 class="card-title lg-text">Title</h5>
                <p class="card-subtitle md-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, ad. Tempore perspiciatis rerum atque labore soluta, similique doloremque eaque, asperiores ipsa sit commodi aliquid minima, assumenda neque deserunt architecto error?</p>
              </div>
              <div class="card-right">
                <button class="close-icon">
                  <BsPin />
                </button>
              </div>
            </div>
            <div className="note-footer">
            <p class="note-date">Created on 02/04/2020 </p>
            <div className="note-action-btns">
                <button className="action-btn"><BsTrash /></button>
                <button className="action-btn"><MdOutlineModeEditOutline /></button>
                <button className="action-btn"><MdOutlineArchive /></button>
            </div>
            </div>
           
          </div>
          <div class="card notes-card card-with-dismiss">
            <div class="card-header">
              <div class="card-left">
                <h5 class="card-title lg-text">Title</h5>
                <p class="card-subtitle md-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, ad. Tempore perspiciatis rerum atque labore soluta, similique doloremque eaque, asperiores ipsa sit commodi aliquid minima, assumenda neque deserunt architecto error?</p>
              </div>
              <div class="card-right">
                <button class="close-icon">
                  <BsPin />
                </button>
              </div>
            </div>
            <div className="note-footer">
            <p class="note-date">Created on 02/04/2020 </p>
            <div className="note-action-btns">
                <button className="action-btn"><BsTrash /></button>
                <button className="action-btn"><MdOutlineModeEditOutline /></button>
                <button className="action-btn"><MdOutlineArchive /></button>
            </div>
            </div>
           
          </div>
          <div class="card notes-card card-with-dismiss">
            <div class="card-header">
              <div class="card-left">
                <h5 class="card-title lg-text">Title</h5>
                <p class="card-subtitle md-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, ad. Tempore perspiciatis rerum atque labore soluta, similique doloremque eaque, asperiores ipsa sit commodi aliquid minima, assumenda neque deserunt architecto error?</p>
              </div>
              <div class="card-right">
                <button class="close-icon">
                  <BsPin />
                </button>
              </div>
            </div>
            <div className="note-footer">
            <p class="note-date">Created on 02/04/2020</p>
            <div className="note-action-btns">
                <button className="action-btn"><BsTrash /></button>
                <button className="action-btn"><MdOutlineModeEditOutline /></button>
                <button className="action-btn"><MdOutlineArchive /></button>
            </div>
            </div>
           
          </div>
        </div>
      
          
        
      </section>
      <section className="all-notes-section">
          <h4 className="all-notes-heading">Pinned Notes</h4>
        <div className="all-notes-container">
          <div class="card notes-card card-with-dismiss">
            <div class="card-header">
              <div class="card-left">
                <h5 class="card-title lg-text">Title</h5>
                <p class="card-subtitle md-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, ad. Tempore perspiciatis rerum atque labore soluta, similique doloremque eaque, asperiores ipsa sit commodi aliquid minima, assumenda neque deserunt architecto error?</p>
              </div>
              <div class="card-right">
                <button class="close-icon">
                  <BsPin />
                </button>
              </div>
            </div>
            <div className="note-footer">
            <p class="note-date">Created on 02/04/2020 </p>
            <div className="note-action-btns">
                <button className="action-btn"><BsTrash /></button>
                <button className="action-btn"><MdOutlineModeEditOutline /></button>
                <button className="action-btn"><MdOutlineArchive /></button>
            </div>
            </div>
           
          </div>
          <div class="card notes-card card-with-dismiss">
            <div class="card-header">
              <div class="card-left">
                <h5 class="card-title lg-text">Title</h5>
                <p class="card-subtitle md-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, ad. Tempore perspiciatis rerum atque labore soluta, similique doloremque eaque, asperiores ipsa sit commodi aliquid minima, assumenda neque deserunt architecto error?</p>
              </div>
              <div class="card-right">
                <button class="close-icon">
                  <BsPin />
                </button>
              </div>
            </div>
            <div className="note-footer">
            <p class="note-date">Created on 02/04/2020 </p>
            <div className="note-action-btns md-text">
                <button className="action-btn"><BsTrash /></button>
                <button className="action-btn"><MdOutlineModeEditOutline /></button>
                <button className="action-btn"><MdOutlineArchive /></button>
            </div>
            </div>
           
          </div>
          <div class="card notes-card card-with-dismiss">
            <div class="card-header">
              <div class="card-left">
                <h5 class="card-title lg-text">Title</h5>
                <p class="card-subtitle md-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, ad. Tempore perspiciatis rerum atque labore soluta, similique doloremque eaque, asperiores ipsa sit commodi aliquid minima, assumenda neque deserunt architecto error?</p>
              </div>
              <div class="card-right">
                <button class="close-icon">
                  <BsPin />
                </button>
              </div>
            </div>
            <div className="note-footer">
            <p class="note-date">Created on 02/04/2020 </p>
            <div className="note-action-btns">
                <button className="action-btn"><BsTrash /></button>
                <button className="action-btn"><MdOutlineModeEditOutline /></button>
                <button className="action-btn"><MdOutlineArchive /></button>
            </div>
            </div>
           
          </div>
        </div>
      
          
        
      </section>
    </main>
    </div>
    
  );
};

export { Main };
