import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { boxShadowTight } from '../base/style-utils';
import Hover from '../hover';

const HeaderRow = styled('div')`
  background-color: ${props => props.theme.dark}
  height: 60px;
  padding: 0 20px;
`;
const HoverLink = styled(Link)`
  &:hover{ background-color: ${props => props.theme.gray90};}
`;

const DropdownOptions = styled('div')`
  background-color: ${props => props.theme.gray100};
  ${boxShadowTight};
  cursor: pointer;
  position: absolute;
  top: 40px;
  display: none;
`;

const Dropdown = () => (
  <Hover>
    {isHovered => (
      <div style={{ position: 'relative' }}>
        <p>customers</p>
        {isHovered &&
          <DropdownOptions
            style={{ position: 'absolute', top: 20, display: 'flex' }}
          >
            <HoverLink to="/account">search</HoverLink>
            <HoverLink to="/account">search</HoverLink>
            <HoverLink to="/account">search</HoverLink>
          </DropdownOptions>}
      </div>
    )}
  </Hover>
);

const Header = () => {
  return (
    <HeaderRow alignItems="center">
      <Link to="/" style={{ margin: '-3px 124px 0 0' }}>
        <div>
          <p> ethereum starter </p>
        </div>
      </Link>

      {/* <Dropdown /> */}
      {/* <span class="dropdown-wrapper">
  		<a class='header-link' href='/account'>Customers</a>
  		<div class="dropdown-box">
  			<a class="dropdown-link" href="/account/"><span>Search</span></a>
  			<a class="dropdown-link" href="/account/bulkemail"><span>Send&nbsp;Bulk&nbsp;Email</span></a>
  			<a class="dropdown-link" href="/account/massrefund"><span>Perform&nbsp;Mass&nbsp;Refund</span></a>
        // TODO ADD ViewBag.IsAdmin & ViewBag.isDealAdmin Options
  		</div>
  	</span> */}

      {/* <span class="dropdown-wrapper">
  		<a class='header-link' href="/deal">Deals</a>
  		<div class="dropdown-box">
  			<a class="dropdown-link" href="/deal"><span>Overview</span></a>
  			<a class="dropdown-link" href="/deal/search"><span>Sales&nbsp;Search</span></a>
  			<a class="dropdown-link" href="/deal/proposals"><span>Deal&nbsp;Coordinators</span></a>
  			<a class="dropdown-link" href="/deal/dealsupport"><span>Deal&nbsp;Support</span></a>
  		</div>
  	</span> */}

      {/* <span class="dropdown-wrapper">
  		<a class='header-link' href="/orders">Orders</a>
  	</span> */}

      {/* <span class="dropdown-wrapper">
  		<a class='header-link' href="/accounting">Accounting</a>
  		<div class="dropdown-box">
  			<a class="dropdown-link" href="/accounting"><span>Payments</span></a>
  			<a class="dropdown-link" href="/accounting/invoices"><span>Invoices</span></a>
        // TODO: Add ViewBag.CanAddDwollaAccessToken link
  		</div>
  	</span> */}

      {/* <span class="dropdown-wrapper">
  		<a class='header-link' href="/newsellers/applications">New Sellers</a>
  		<div class="dropdown-box">
  			<a class="dropdown-link" href="/newsellers/applications"><span>Applications</span></a>
  		</div>
  	</span> */}

      {/* <span class="maral pad20r">
  		<a href="https://sellersupport.jane.com/" target="_blank" class="pad30r"><i class="fa fa-question-circle txt-white"></i></a>
  		<a href="/logout" class="txt-white"><i class="ji-user-full f14"></i>&nbsp;&nbsp;&nbsp;LOGOUT</a>
  	</span> */}
    </HeaderRow>
  );
};

export default Header;
