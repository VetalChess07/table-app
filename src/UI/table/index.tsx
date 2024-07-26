import React, { FC, Fragment, memo, useState } from "react";
import type { UserI } from "../../types/UserType";
import type { TableType } from "./type";
import Button from "../button";
import { handleUserClick } from "../../utils/handleTableItemClick";

import style from "./style.module.scss";

const {
  item,
  row,
  name,
  phone,
  nestedContainer,
  table,
  header,
  headerCell,
  body,
  inner,
} = style;

const Table: FC<TableType> = memo(({ users }) => {
  const [expandedUserIds, setExpandedUserIds] = useState<Set<number>>(
    new Set()
  );

  const renderNestedUsers = (users: UserI[], level: number = 0) => {
    return users.map((user) => (
      <Fragment key={user.id}>
        <div className={row} style={{ paddingLeft: `${level * 20}px` }}>
          {user.subordinates.length > 0 && (
            <Button
              onClick={() =>
                handleUserClick({ userId: user.id, setExpandedUserIds })
              }
              style={{ padding: "10px 8px", marginRight: "3px" }}
            >
              {expandedUserIds.has(user.id) ? "-" : "+"}
            </Button>
          )}

          <div className={item}>
            <p className={name}>{user.name}</p>
            <p className={phone}>{user.phone}</p>
          </div>
        </div>
        {expandedUserIds.has(user.id) && user.subordinates.length > 0 && (
          <div className={nestedContainer}>
            {renderNestedUsers(user.subordinates, level + 1)}
          </div>
        )}
      </Fragment>
    ));
  };

  return (
    <div className={table}>
      <div className={header}>
        <div className={headerCell}>Имя</div>
        <div className={headerCell}>Телефон</div>
      </div>
      <div className={body}>{renderNestedUsers(users)}</div>
    </div>
  );
});

export default Table;
