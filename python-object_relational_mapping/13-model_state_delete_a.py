#!/usr/bin/python3
"""
Script that deletes all State objects with a name containing the letter 'a'
from the database hbtn_0e_6_usa.
"""

from sys import argv
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from model_state import Base, State

if __name__ == "__main__":
    # Parse command-line arguments
    username = argv[1]
    password = argv[2]
    db_name = argv[3]

    # Create a database engine
    engine = create_engine(
        "mysql+mysqldb://{}:{}@localhost:3306/{}".format(
            username, password, db_name
        ),
        pool_pre_ping=True
    )

    # Bind the engine to the metadata of the Base class
    Base.metadata.create_all(engine)

    # Create a configured "Session" class
    Session = sessionmaker(bind=engine)
    session = Session()

    # Query and delete all State objects with a name containing the letter 'a'
    states_to_delete = session.query(State).filter(
        State.name.like("%a%")
    )
    print(f"States to delete (debug): {[state.name for state in states_to_delete]}")  # Debugging

    for state in states_to_delete:
        session.delete(state)

    # Commit the changes to the database
    session.commit()

    # Close the session
    session.close()
