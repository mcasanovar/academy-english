import React from "react";
import { useNavigate } from "react-router-dom";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import {
  faLayerGroup,
  faPeopleGroup,
  faGraduationCap,
  faCreditCard,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import "react-pro-sidebar/dist/css/styles.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// components
import {} from "..";

export default function SideBar() {

  let navigate = useNavigate();

  return (
    <ProSidebar className="container-sidebar">
      <Menu iconShape="square">
        <MenuItem icon={<FontAwesomeIcon icon={faChartLine} />} onClick={() => navigate('/')}>
          Dashboard
        </MenuItem>
        <MenuItem icon={<FontAwesomeIcon icon={faLayerGroup} />} onClick={() => navigate('/levels')}>
          Niveles
        </MenuItem>
        <MenuItem icon={<FontAwesomeIcon icon={faPeopleGroup} />}>
          Grupos
        </MenuItem>
        <MenuItem icon={<FontAwesomeIcon icon={faGraduationCap} />} onClick={() => navigate('/students')}>
          Alumnos
        </MenuItem>
        <MenuItem icon={<FontAwesomeIcon icon={faCreditCard} />}>
          Pagos
        </MenuItem>
        {/* <SubMenu title="Components" icon={element2}>
          <MenuItem>Component 1</MenuItem>
          <MenuItem>Component 2</MenuItem>
        </SubMenu> */}
      </Menu>
    </ProSidebar>
  );
}
