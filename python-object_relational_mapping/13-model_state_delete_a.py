#!/usr/bin/python3
"""
Deletes all State objects with a name containing the letter 'a'
from the database hbtn_0e_6_usa.
"""

import sys
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from model_state import Base, State

if __name__ == "__main__":
    # Retrieve MySQL username, password, and database name from command-line arguments
    username = sys.argv[1]
    password = sys.argv[2]
    database = sys.argv[3]

    # Create a database connection using SQLAlchemy
    engine = create_engine(
        f"mysql+mysqldb://{username}:{password}@localhost:3306/{database}",
        pool_pre_ping=True
    )
    Base.metadata.create_all(engine)

    # Create a session
    Session = sessionmaker(bind=engine)
    session = Session()

    try:
        # Query and delete State objects containing the letter 'a' in their name (case-insensitive)
        states_to_delete = session.query(State).filter(State.name.ilike('%a%')).all()

        if states_to_delete:
            for state in states_to_delete:
                print(f"Deleting state: {state.name}")  # Debug: Check which state is being deleted
                session.delete(state)
            # Commit the changes to the database
            session.commit()
        else:
            print("No states with the letter 'a' found for deletion.")  # Debug: No states found

    except Exception as e:
        print(f"Error: {e}")

    finally:
        # Close the session
        session.close()

